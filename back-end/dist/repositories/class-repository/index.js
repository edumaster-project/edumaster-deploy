"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
async function create(userId, params) {
    return config_1.prisma.classes.create({
        data: {
            userId,
            ...params,
        },
    });
}
async function findName(userId, name) {
    return config_1.prisma.classes.findFirst({
        where: {
            userId,
            name,
        },
    });
}
async function findClasses(userId) {
    return config_1.prisma.classes.findMany({
        where: { userId },
    });
}
const classRepository = { create, findName, findClasses };
exports.default = classRepository;
