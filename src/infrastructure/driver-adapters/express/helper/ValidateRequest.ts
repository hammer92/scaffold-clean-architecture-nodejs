import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { ResponseBuilder } from "./ResponseBuilder";


export const route = (func: (req: Request, res: Response, next: () => void) => void) => {
  return (req: Request, res: Response, next: () => void) => {
    const errors = validationResult(req);

    /* validate all generic errors */
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json(new ResponseBuilder().error("Validation failed", errors.array()));
    }

    /* process function and catch internal server errors */
    func(req, res, next)
  };
};
