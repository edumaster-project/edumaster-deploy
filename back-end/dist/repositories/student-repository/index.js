"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
async function create(data) {
    return config_1.prisma.student.create({
        data,
    });
}
async function findAllStudents(classId) {
    return config_1.prisma.student.findMany({
        where: {
            classId,
        },
    });
}
const studentRepository = {
    create,
    findAllStudents,
};
exports.default = studentRepository;
