import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  NotImplementedError,
  UnauthorizedError,
} from ".";

export const errorMiddlewareFunc: ErrorRequestHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let status = 500;
    let errorMessage = "Internal Server Error";

    if (err instanceof NotFoundError) status = 404;
    errorMessage = err.message;

    if (err instanceof BadRequestError) status = 400;
    errorMessage = err.message;

    if (err instanceof UnauthorizedError) status = 401;
    errorMessage = err.message;

    if (err instanceof ForbiddenError) status = 403;
    errorMessage = err.message;

    if (err instanceof NotImplementedError) status = 501;
    errorMessage = err.message;

    console.log(errorMessage);

    res.status(status).json({
      Error: errorMessage,
    });
  } catch (error) {
    next(error);
  }
};
