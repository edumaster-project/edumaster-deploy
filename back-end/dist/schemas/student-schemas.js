"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.studentsSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    birthDate: joi_1.default.date().raw().required(),
    fatherName: joi_1.default.string().required(),
    matherName: joi_1.default.string().required(),
    classId: joi_1.default.number().required(),
});
