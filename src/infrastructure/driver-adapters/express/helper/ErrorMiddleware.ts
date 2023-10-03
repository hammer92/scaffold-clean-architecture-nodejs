import { ResponseBuilder } from "./ResponseBuilder";

// handle not found errors
export const notFound = (req: any, res: any, next: any) => {
  if (!res.finished) {
    res
      .status(400)
      .send(new ResponseBuilder().error("Requested Resource Not Found").toJSON())
      .end();
  }
};

// handle internal server errors
export const internalServerError = (
  err: any,
  req: any,
  res: any,
  next: any
) => {
  if (!res.finished) {
    res
      .status(err.status || 500)
      .send(new ResponseBuilder().error(err.message).setMeta(err.toJSON()))
      .end();
  }
};