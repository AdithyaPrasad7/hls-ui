import type { QueryPath } from "../models/QueryPath";
import { api } from "./Axios";

export abstract class ApiServiceBase {
  private readonly serviceType: string;

  constructor(serviceType: string) {
    this.serviceType = serviceType;
  }

  protected buildUrl(path?: QueryPath) {
    let url = `/${this.serviceType}`;

    if (path?.route) {
      for (const r of path.route) url += `/${r}`;
    }

    if (path?.query) {
      const q = new URLSearchParams();
      Object.entries(path.query).forEach(([k, v]) => {
        if (Array.isArray(v)) v.forEach((x) => q.append(k, String(x)));
        else if (v !== undefined && v !== null) q.append(k, String(v));
      });
      if (q.toString()) url += `?${q}`;
    }

    return url;
  }

  protected async request<T>(
    method: string,
    path: QueryPath,
    body?: any
  ): Promise<T> {
    const res = await api.request({
      url: this.buildUrl(path),
      method,
      data: body,
    });

    return res.data?.data ?? res.data;
  }
}
