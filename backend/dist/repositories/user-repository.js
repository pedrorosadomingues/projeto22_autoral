"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.createUser = void 0;
<<<<<<< HEAD
const config_1 = require("../config");
=======
const config_1 = require("../config/index");
>>>>>>> 66f21d1b9e4e995aff4f440fa769b9ec6e8ed476
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
