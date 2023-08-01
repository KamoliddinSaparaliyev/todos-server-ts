import {
  ErrorCustomRequestHandler,
  NextFunction,
  CustomRequest,
  Response,
} from "express";

export const errorMiddlewareFunc: ErrorCustomRequestHandler = async (
  err: any,
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    let status = 500;
    let errorMessage = "Internal Server Error";

    if (err instanceof NotFoundError) {
      status = 404;
      errorMessage = err.message;
    } else if (err instanceof BadCustomRequestError) {
      status = 400;
      errorMessage = err.message;
    } else if (err instanceof UnauthorizedError) {
      status = 401;
      errorMessage = err.message;
    } else if (err instanceof ForbiddenError) {
      status = 403;
      errorMessage = err.message;
    } else if (err instanceof NotImplementedError) {
      status = 501;
      errorMessage = err.message;
    }

    console.error("Error occurred:", errorMessage);

    res.status(status).json({
      error: "An error occurred.",
    });
  } catch (error) {
    console.error("Unexpected error occurred:", error);

    next(error);
  }
};

export class BadCustomRequestError extends Error {
  constructor(msg: string) {
    super(msg);

    if (Error.captureStackTrace)
      Error.captureStackTrace(this, BadCustomRequestError);
  }
}

export class NotFoundError extends Error {
  constructor(msg: string) {
    super(msg);

    if (Error.captureStackTrace) Error.captureStackTrace(this, NotFoundError);
  }
}

export class UnauthorizedError extends Error {
  constructor(msg: string) {
    super(msg);

    if (Error.captureStackTrace)
      Error.captureStackTrace(this, UnauthorizedError);
  }
}

export class ForbiddenError extends Error {
  constructor(msg: string) {
    super(msg);

    if (Error.captureStackTrace) Error.captureStackTrace(this, ForbiddenError);
  }
}

export class NotImplementedError extends Error {
  constructor(msg: string) {
    super(msg);

    if (Error.captureStackTrace)
      Error.captureStackTrace(this, NotImplementedError);
  }
}
