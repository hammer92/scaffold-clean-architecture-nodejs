import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { ResponseBuilder } from "./ResponseBuilder";


export const route = (func: (req:Request, res:Response, next: () => void) => void) => {
  return (req: Request, res: Response, next: () => void) => {
    const errors = validationResult(req);

    /* validate custom status codes errors */
 /*    for (const errorKey of Object.keys(CUSTOM_STATUS_CODES_MAPPING)) {
      const validationErrors = errors
        .array()
        .filter((x: any) => x.msg === errorKey);
      if (validationErrors.length > 0) {
        return res
          .status(CUSTOM_STATUS_CODES_MAPPING[errorKey])
          .send(
            new ResponseBuilder().err("Validation failed", validationErrors)
          );
      }
    } */

    /* validate all generic errors */
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .send(new ResponseBuilder().error("Validation failed", errors.array()));
    }

    /* process function and catch internal server errors */
    func(req, res, next)
  };
};
