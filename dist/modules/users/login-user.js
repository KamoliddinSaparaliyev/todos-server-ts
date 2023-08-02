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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const bcryptjs_1 = require("bcryptjs");
const User_1 = require("./User");
const config_1 = __importDefault(require("../../shared/config"));
const errors_1 = require("../../shared/errors");
const login = ({ password, username, }) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield User_1.User.findOne({ username });
    if (!existing)
        throw new errors_1.NotFoundError("User not found");
    const match = yield (0, bcryptjs_1.compare)(password, existing.password);
    if (!match)
        throw new errors_1.UnauthorizedError("Username or password wrong");
    const payload = { user: { id: existing._id } };
    const secretKey = config_1.default.jwt.secret;
    const token = (0, jsonwebtoken_1.sign)(payload, secretKey);
    return { token };
});
exports.login = login;
