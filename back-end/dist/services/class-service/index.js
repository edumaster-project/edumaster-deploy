"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../errors");
const class_repository_1 = __importDefault(require("../../repositories/class-repository"));
async function createClasses(userId, classData) {
    const verifyDuplicatedName = await class_repository_1.default.findName(userId, classData.name);
    console.log(verifyDuplicatedName);
    if (verifyDuplicatedName)
        throw (0, errors_1.conflictError)("There is already a class with given name");
    const createdClass = await class_repository_1.default.create(userId, classData);
    return createdClass;
}
async function getAllClasses(userId) {
    const listClasses = await class_repository_1.default.findClasses(userId);
    return listClasses;
}
const classService = { createClasses, getAllClasses };
exports.default = classService;
