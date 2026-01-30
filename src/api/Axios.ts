// api/axios.ts
import axios from "axios";
import { tokenStore } from "../auth/TokenStore";
import { API_URL } from "../AppSettings";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

let refreshing = false;
let queue: ((token: string) => void)[] = [];

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status !== 401 || original._retry) {
      return Promise.reject(error);
    }

    original._retry = true;

    if (refreshing) {
      return new Promise((resolve) => {
        queue.push((token) => {
          original.headers.Authorization = `Bearer ${token}`;
          resolve(api(original));
        });
      });
    }

    refreshing = true;

    try {
      const res = await api.post("/auth/refresh", {
        refreshToken: tokenStore.getRefresh(),
      });

      tokenStore.set(res.data.accessToken, res.data.refreshToken);

      queue.forEach((cb) => cb(res.data.accessToken));
      queue = [];

      original.headers.Authorization = `Bearer ${res.data.accessToken}`;
      return api(original);
    } catch {
      tokenStore.clear();
      window.location.href = "/login";
      return Promise.reject(error);
    } finally {
      refreshing = false;
    }
  },
);
