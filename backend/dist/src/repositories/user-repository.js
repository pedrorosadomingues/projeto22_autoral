"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.createUser = void 0;
const config_1 = require("../config");
async function createUser({ name, email, password, }) {
    return config_1.prisma.user.create({
        data: {
            name,
            email,
            password,
        },
    });
}
exports.createUser = createUser;
async function findUserByEmail(email) {
    return config_1.prisma.user.findUnique({
        where: {
            email,
        },
    });
}
exports.findUserByEmail = findUserByEmail;
