"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.patchUserSchema = exports.postUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const postUserSchema = joi_1.default.object({
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
});
exports.postUserSchema = postUserSchema;
const patchUserSchema = joi_1.default.object({
    username: joi_1.default.string(),
    password: joi_1.default.string(),
    name: joi_1.default.string(),
});
exports.patchUserSchema = patchUserSchema;
const loginUserSchema = joi_1.default.object({
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
});
exports.loginUserSchema = loginUserSchema;
