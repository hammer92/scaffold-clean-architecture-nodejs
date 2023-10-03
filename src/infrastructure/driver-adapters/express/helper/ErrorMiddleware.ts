import { ResponseBuilder } from "./ResponseBuilder";
import { Request, Response } from "express";

// handle not found errors
export const notFound = (req: Request, res: Response) => {
  if (!res.finished) {
    res
      .status(400)
      .json(new ResponseBuilder().error("Requested Resource Not Found").toJSON())
      .end();
  }
};

// handle internal server errors
export const internalServerError = (
  err: Error,
  req: Request,
  res: Response
) => {
  if (!res.finished) {
    res
      .status(500)
      .json(new ResponseBuilder().error(err.message).setMeta(err).toJSON())
      .end();
  }
};