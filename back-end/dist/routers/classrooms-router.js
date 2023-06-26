"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classRoutes = void 0;
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const schemas_1 = require("../schemas");
const express_1 = require("express");
const classRoutes = (0, express_1.Router)();
exports.classRoutes = classRoutes;
classRoutes
    .all("/*", middlewares_1.authenticateToken)
    .post("/", (0, middlewares_1.validateSchema)(schemas_1.classesSchema), controllers_1.createClasses)
    .get("/", controllers_1.getClasses);
