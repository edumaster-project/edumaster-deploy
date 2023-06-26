"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const errors_1 = require("../../errors");
const session_repository_1 = __importDefault(require("../../repositories/session-repository"));
const user_repository_1 = __importDefault(require("../../repositories/user-repository"));
const prisma_utils_1 = require("../../utils/prisma-utils");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function signIn(params) {
    const { email, password } = params;
    console.log(params);
    const user = await getUser(email);
    const validatePassword = await bcrypt_1.default.compare(password, user.password);
    if (!validatePassword)
        throw (0, errors_1.invalidCredentialsError)();
    const token = await createSession(user.id);
    return {
        user: (0, prisma_utils_1.exclude)(user, "password"),
        token,
    };
}
async function createSession(userId) {
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET);
    await session_repository_1.default.create({ token, userId });
    return token;
}
async function getUser(email) {
    const user = await user_repository_1.default.findByEmail(email);
    if (!user)
        throw (0, errors_1.invalidCredentialsError)();
    return user;
}
async function createUser(params) {
    const { name, email, password } = params;
    await validateUniqueEmail(email);
    const hashPassword = await bcrypt_1.default.hash(password, 12);
    return user_repository_1.default.create({ name, email, password: hashPassword });
}
async function validateUniqueEmail(email) {
    const findEmail = await user_repository_1.default.findByEmail(email);
    if (findEmail)
        throw (0, errors_1.duplicatedEmailError)();
}
exports.userService = {
    signIn,
    createUser,
};
exports.default = exports.userService;
