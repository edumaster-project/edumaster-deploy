"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_repository_1 = __importDefault(require("../../repositories/student-repository"));
async function createStudent(studentData) {
    const createdClass = await student_repository_1.default.create(studentData);
    return createdClass;
}
async function getAllStudents(classId) {
    const listClasses = await student_repository_1.default.findAllStudents(classId);
    return listClasses;
}
const studentService = { createStudent, getAllStudents };
exports.default = studentService;
