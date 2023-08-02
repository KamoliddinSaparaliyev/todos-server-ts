import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors";
import Joi, { ValidationError } from "joi";

export default function genValidator(schema: Joi.Schema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ValidationError)
        throw new BadRequestError(error.details[0].message);
      else next(error);
    }
  };
}
