"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _api_1 = __importDefault(require("./modules/users/_api"));
const handle_1 = require("./shared/errors/handle");
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(handle_1.errorMiddlewareFunc);
app.use(_api_1.default);
app.get("/", (req, res) => {
    res.send("Hello TypeScript");
});
(0, db_1.default)();
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
