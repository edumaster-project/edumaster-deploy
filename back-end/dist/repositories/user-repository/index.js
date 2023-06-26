"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
async function findByEmail(email) {
    return config_1.prisma.user.findUnique({
        where: {
            email,
        },
    });
}
async function create(data) {
    return config_1.prisma.user.create({
        data,
    });
}
const userRepository = {
    findByEmail,
    create,
};
exports.default = userRepository;
