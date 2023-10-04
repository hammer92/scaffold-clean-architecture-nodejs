import { Request, Response } from "express";

export interface TypedRequest<T> extends Request {
  body: T
}

export interface TypedResponse extends Response {
}