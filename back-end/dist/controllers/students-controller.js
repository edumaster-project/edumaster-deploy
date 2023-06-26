"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = exports.getStudents = void 0;
const http_status_1 = __importDefault(require("http-status"));
const student_service_1 = __importDefault(require("../services/student-service"));
async function getStudents(req, res, next) {
    const { classId } = req.params;
    try {
        const listStudents = await student_service_1.default.getAllStudents(Number(classId));
        return res.status(http_status_1.default.OK).send(listStudents);
    }
    catch (error) {
        next(error);
    }
}
exports.getStudents = getStudents;
async function createStudent(req, res, next) {
    const studentData = req.body;
    try {
        const createdClass = await student_service_1.default.createStudent(studentData);
        return res.status(http_status_1.default.OK).send(createdClass);
    }
    catch (error) {
        next(error);
    }
}
exports.createStudent = createStudent;
