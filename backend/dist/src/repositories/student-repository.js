"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudentByIdRepository = exports.upsertStudentRepository = exports.getAllStudentsByUserIdRepository = exports.getStudentByCpfRepository = exports.getStudentByIdRepository = exports.createStudentRepository = void 0;
const config_1 = require("../config");
async function createStudentRepository(params) {
    return config_1.prisma.student.create({
        data: params,
    });
}
exports.createStudentRepository = createStudentRepository;
async function getStudentByIdRepository(id) {
    return config_1.prisma.student.findUnique({
        where: {
            id,
        },
    });
}
exports.getStudentByIdRepository = getStudentByIdRepository;
async function getStudentByCpfRepository(cpf) {
    return config_1.prisma.student.findUnique({
        where: {
            cpf,
        },
    });
}
exports.getStudentByCpfRepository = getStudentByCpfRepository;
async function getAllStudentsByUserIdRepository(id) {
    return config_1.prisma.student.findMany({
        where: {
            userId: id,
        },
    });
}
exports.getAllStudentsByUserIdRepository = getAllStudentsByUserIdRepository;
async function upsertStudentRepository(params) {
    return config_1.prisma.student.upsert({
        where: {
            id: params.id,
        },
        update: params,
        create: params,
    });
}
exports.upsertStudentRepository = upsertStudentRepository;
async function deleteStudentByIdRepository(id) {
    return config_1.prisma.student.delete({
        where: {
            id,
        },
    });
}
exports.deleteStudentByIdRepository = deleteStudentByIdRepository;
