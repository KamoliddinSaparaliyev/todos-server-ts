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
exports.deleteUser = exports.loginUser = exports.patchUser = exports.getUser = exports.getUsers = exports.postUser = void 0;
const register_user_1 = require("./register-user");
const validator_1 = __importDefault(require("../../shared/validator"));
const _schemas_1 = require("./_schemas");
const list_users_1 = require("./list-users");
const show_user_1 = require("./show-user");
const edit_user_1 = require("./edit-user");
const remove_user_1 = require("./remove-user");
const login_user_1 = require("./login-user");
const postUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, validator_1.default)(_schemas_1.postUserSchema);
        const result = yield (0, register_user_1.addUser)(req.body);
        res.status(201).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.postUser = postUser;
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, list_users_1.listUsers)();
        res.status(201).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.getUsers = getUsers;
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, show_user_1.showUser)({ id: req.params.id });
        res.status(201).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.getUser = getUser;
const patchUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, validator_1.default)(_schemas_1.patchUserSchema);
        const result = yield (0, edit_user_1.editUser)({
            id: req.params.id,
            data: req.body,
        });
        res.status(201).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.patchUser = patchUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, validator_1.default)(_schemas_1.patchUserSchema);
        const result = yield (0, login_user_1.login)(req.body);
        res.status(201).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.loginUser = loginUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, validator_1.default)(_schemas_1.patchUserSchema);
        const result = yield (0, remove_user_1.removeUser)({ id: req.params.id });
        res.status(201).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteUser = deleteUser;
