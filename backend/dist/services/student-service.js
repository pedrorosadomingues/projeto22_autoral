"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentByIdService = exports.deleteStudentByIdService = exports.getAllStudentsByUserIdService = exports.createStudentService = exports.getStudentByIdService = void 0;
const repositories_1 = require("../repositories/index");
const errors_1 = require("../errors/index");
const errors_2 = require("../errors/index");
async function verifyCpfStudent(cpf) {
    const student = await (0, repositories_1.getStudentByCpfRepository)(cpf);
    if (student)
        throw (0, errors_1.duplicateCpfError)();
}
async function verifyStudentUserId(studentId, userId) {
    const student = await (0, repositories_1.getStudentByIdRepository)(studentId);
    if (student.userId !== userId)
        throw (0, errors_2.notFoundStudentError)();
    return student;
}
async function getStudentByIdService(id) {
    const student = await (0, repositories_1.getStudentByIdRepository)(id);
    if (!student)
        throw (0, errors_2.notFoundStudentError)();
    return student;
}
exports.getStudentByIdService = getStudentByIdService;
async function createStudentService(params) {
    await verifyCpfStudent(params.cpf);
    return (0, repositories_1.createStudentRepository)(params);
}
exports.createStudentService = createStudentService;
async function getAllStudentsByUserIdService(id) {
    const students = await (0, repositories_1.getAllStudentsByUserIdRepository)(id);
    if (!students)
        throw (0, errors_2.notFoundStudentError)();
    return students;
}
exports.getAllStudentsByUserIdService = getAllStudentsByUserIdService;
async function deleteStudentByIdService(userId, studentId) {
    await verifyStudentUserId(studentId, userId);
    return (0, repositories_1.deleteStudentByIdRepository)(studentId);
}
exports.deleteStudentByIdService = deleteStudentByIdService;
async function updateStudentByIdService(params) {
    const student = await verifyStudentUserId(params.id, params.userId);
    return (0, repositories_1.upsertStudentRepository)({ ...params, cpf: student.cpf, createdAt: student.createdAt, name: student.name, age: student.age });
}
exports.updateStudentByIdService = updateStudentByIdService;
