"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionRepository = void 0;
const config_1 = require("../config");
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
