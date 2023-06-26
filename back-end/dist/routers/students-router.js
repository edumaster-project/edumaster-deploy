"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const schemas_1 = require("../schemas");
const express_1 = require("express");
const studentRoutes = (0, express_1.Router)();
exports.studentRoutes = studentRoutes;
studentRoutes
    .all("/*", middlewares_1.authenticateToken)
    .post("/", (0, middlewares_1.validateSchema)(schemas_1.studentsSchema), controllers_1.createStudent)
    .get("/:classId", controllers_1.getStudents);
