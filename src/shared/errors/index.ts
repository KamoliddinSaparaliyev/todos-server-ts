export class BadRequestError extends Error {
  constructor(msg: string) {
    super(msg);

    if (Error.captureStackTrace) Error.captureStackTrace(this, BadRequestError);
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
