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
exports.editUser = void 0;
const errors_1 = require("../../shared/errors");
const User_1 = require("./User");
const editUser = ({ id, data }) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield User_1.User.findById(id);
    if (!existing)
        throw new errors_1.NotFoundError("User not found");
    const updated = yield User_1.User.findByIdAndUpdate(id, data, {
        new: true,
    });
    return updated;
});
exports.editUser = editUser;
