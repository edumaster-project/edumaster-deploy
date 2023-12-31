"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classesSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.classesSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    quantity: joi_1.default.number().required() || joi_1.default.string().required(),
});
