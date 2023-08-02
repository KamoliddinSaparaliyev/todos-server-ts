"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddlewareFunc = void 0;
const _1 = require(".");
const errorMiddlewareFunc = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let status = 500;
        let errorMessage = "Internal Server Error";
        if (err instanceof _1.NotFoundError)
            status = 404;
        errorMessage = err.message;
        if (err instanceof _1.BadRequestError)
            status = 400;
        errorMessage = err.message;
        if (err instanceof _1.UnauthorizedError)
            status = 401;
        errorMessage = err.message;
        if (err instanceof _1.ForbiddenError)
            status = 403;
        errorMessage = err.message;
        if (err instanceof _1.NotImplementedError)
            status = 501;
        errorMessage = err.message;
        console.log(errorMessage);
        res.status(status).json({
            Error: errorMessage,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.errorMiddlewareFunc = errorMiddlewareFunc;
