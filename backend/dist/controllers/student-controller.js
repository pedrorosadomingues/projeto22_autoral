"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentById = exports.deleteStudentById = exports.getStudentByUser = exports.getStudentById = exports.postStudent = void 0;
const http_status_1 = __importDefault(require("http-status"));
const services_1 = require("../services/index");
async function postStudent(req, res) {
    const { name, age, nivelId, classTimeId, cpf, weekdayId } = req.body;
    const { userId } = res.locals;
    try {
        await (0, services_1.createStudentService)({
            name,
            age: Number(age),
            nivelId: Number(nivelId),
            classTimeId: Number(classTimeId),
            cpf,
            userId: Number(userId),
            weekdayId: Number(weekdayId),
            createdAt: new Date(),
        });
        return res.sendStatus(http_status_1.default.CREATED);
    }
    catch (error) {
        if (error.name === "DuplicateCPFError") {
            return res.status(http_status_1.default.CONFLICT).send(error.message);
        }
        return res.status(http_status_1.default.NOT_FOUND).send(error.message);
    }
}
exports.postStudent = postStudent;
async function getStudentById(req, res) {
    const { id } = req.params;
    try {
        const result = await (0, services_1.getStudentByIdService)(Number(id));
        return res.status(http_status_1.default.OK).send(result);
    }
    catch (error) {
        return res.status(http_status_1.default.NOT_FOUND).send(error.message);
    }
}
exports.getStudentById = getStudentById;
async function getStudentByUser(req, res) {
    const { userId } = res.locals;
    try {
        const result = await (0, services_1.getAllStudentsByUserIdService)(Number(userId));
        return res.status(http_status_1.default.OK).send(result);
    }
    catch (error) {
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(error.message);
    }
}
exports.getStudentByUser = getStudentByUser;
async function deleteStudentById(req, res) {
    const { studentId } = req.params;
    const { userId } = res.locals;
    try {
        await (0, services_1.deleteStudentByIdService)(Number(userId), Number(studentId));
        return res.sendStatus(http_status_1.default.OK);
    }
    catch (error) {
        return res.status(http_status_1.default.NOT_FOUND).send(error.message);
    }
}
exports.deleteStudentById = deleteStudentById;
async function updateStudentById(req, res) {
    const { studentId } = req.params;
    const { name, age, nivelId, classTimeId, weekdayId } = req.body;
    const { userId } = res.locals;
    try {
        await (0, services_1.updateStudentByIdService)({
            name: name,
            age: Number(age),
            nivelId: Number(nivelId),
            classTimeId: Number(classTimeId),
            weekdayId: Number(weekdayId),
            userId: Number(userId),
            id: Number(studentId),
            cpf: "",
            updatedAt: new Date(),
            createdAt: new Date(),
        });
        return res.sendStatus(http_status_1.default.OK);
    }
    catch (error) {
        return res.status(http_status_1.default.NOT_FOUND).send(error.message);
    }
}
exports.updateStudentById = updateStudentById;
