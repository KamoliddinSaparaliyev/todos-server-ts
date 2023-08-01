import { NextFunction, CustomRequest, Response } from "express";
import { BadCustomRequestError } from "../errors";
import Joi, { ValidationError } from "joi";

export default function genValidator(schema: Joi.Schema) {
  return async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ValidationError)
        throw new BadCustomRequestError(error.details[0].message);
      else next(error);
    }
  };
}
