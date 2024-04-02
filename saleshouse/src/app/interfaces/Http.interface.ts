import { HttpHeaders } from "@angular/common/http";

type Method = "POST" | "GET" | "PUT" | "PATCH" | "DELETE";

export interface IHttpRequest {
  headers?: HttpHeaders,
  body?: Record<string, any>,
  method: Method,
  url: string
}