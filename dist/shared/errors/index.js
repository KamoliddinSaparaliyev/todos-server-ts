"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotImplementedError = exports.ForbiddenError = exports.UnauthorizedError = exports.NotFoundError = exports.BadRequestError = void 0;
class BadRequestError extends Error {
    constructor(msg) {
        super(msg);
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, BadRequestError);
    }
}
exports.BadRequestError = BadRequestError;
class NotFoundError extends Error {
    constructor(msg) {
        super(msg);
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, NotFoundError);
    }
}
exports.NotFoundError = NotFoundError;
class UnauthorizedError extends Error {
    constructor(msg) {
        super(msg);
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, UnauthorizedError);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends Error {
    constructor(msg) {
        super(msg);
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, ForbiddenError);
    }
}
exports.ForbiddenError = ForbiddenError;
class NotImplementedError extends Error {
    constructor(msg) {
        super(msg);
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, NotImplementedError);
    }
}
exports.NotImplementedError = NotImplementedError;
