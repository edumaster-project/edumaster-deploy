"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.init = void 0;
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = require("./routers");
const config_1 = require("./config");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
(0, config_1.loadEnv)();
app
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .get("/health", (_req, res) => res.send("Hello world!"))
    .use("/users", routers_1.userRoutes)
    .use("/classes", routers_1.classRoutes)
    .use('/students', routers_1.studentRoutes)
    .use(middlewares_1.handleApplicationErrors);
function init() {
    (0, config_1.connectDb)();
    return Promise.resolve(app);
}
exports.init = init;
async function close() {
    await (0, config_1.disconnectDb)();
}
exports.close = close;
exports.default = app;
