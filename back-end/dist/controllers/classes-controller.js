"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClasses = exports.getClasses = void 0;
const http_status_1 = __importDefault(require("http-status"));
const class_service_1 = __importDefault(require("../services/class-service"));
async function getClasses(req, res, next) {
    try {
        const { userId } = req;
        const listClasses = await class_service_1.default.getAllClasses(userId);
        return res.status(http_status_1.default.OK).send(listClasses);
    }
    catch (error) {
        next(error);
    }
}
exports.getClasses = getClasses;
async function createClasses(req, res, next) {
    const { userId } = req;
    const userData = req.body;
    const convertData = {
        name: userData.name,
        quantity: Number(userData.quantity),
    };
    try {
        const createdClass = await class_service_1.default.createClasses(userId, convertData);
        return res.status(http_status_1.default.OK).send(createdClass);
    }
    catch (error) {
        next(error);
    }
}
exports.createClasses = createClasses;
