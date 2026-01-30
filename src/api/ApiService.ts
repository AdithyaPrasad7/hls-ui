import { api } from "./Axios";

export async function get<T>(url: string): Promise<T> {
  const { data } = await api.get(url);
  return data.data ?? data;
}

export async function post<T>(url: string, body?: any): Promise<T> {
  const { data } = await api.post(url, body);
  return data.data ?? data;
}

export async function patch<T>(url: string, body?: any): Promise<T> {
  const { data } = await api.patch(url, body);
  return data.data ?? data;
}

export async function del<T>(url: string, body?: any): Promise<T> {
  const { data } = await api.delete(url, { data: body });
  return data.data ?? data;
}
