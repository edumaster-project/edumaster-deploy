"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.signIn = void 0;
const users_service_1 = __importDefault(require("../services/users-service"));
const http_status_1 = __importDefault(require("http-status"));
async function signIn(req, res, next) {
    const { email, password } = req.body;
    try {
        const result = await users_service_1.default.signIn({ email, password });
        return res.status(http_status_1.default.OK).send(result);
    }
    catch (error) {
        next(error);
    }
}
exports.signIn = signIn;
async function signUp(req, res, next) {
    const { name, email, password } = req.body;
    try {
        const user = await users_service_1.default.createUser({ name, email, password });
        return res.status(http_status_1.default.CREATED).json({
            id: user.id,
            email: user.email,
        });
    }
    catch (error) {
        next(error);
    }
}
exports.signUp = signUp;
