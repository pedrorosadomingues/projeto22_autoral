"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionRepository = void 0;
<<<<<<< HEAD
const config_1 = require("../config");
=======
const config_1 = require("../config/index");
>>>>>>> 66f21d1b9e4e995aff4f440fa769b9ec6e8ed476
async function createSessionRepository(data) {
    return config_1.prisma.session.upsert({
        where: {
            userId: data.userId,
        },
        update: {
            token: data.token,
            updatedAt: new Date(),
        },
        create: {
            ...data,
        },
    });
}
exports.createSessionRepository = createSessionRepository;
