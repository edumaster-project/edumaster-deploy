"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const schemas_1 = require("../schemas");
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes
    .post("/sign-up", (0, middlewares_1.validateSchema)(schemas_1.signUpSchema), controllers_1.signUp)
    .post("/sign-in", (0, middlewares_1.validateSchema)(schemas_1.signInSchema), controllers_1.signIn);
