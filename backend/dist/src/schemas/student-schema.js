"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentSchema = exports.createStudentSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createStudentSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    age: joi_1.default.number().required(),
    cpf: joi_1.default.string().required(),
    nivelId: joi_1.default.number().required(),
    classTimeId: joi_1.default.number().required(),
    weekdayId: joi_1.default.number().required(),
});
exports.updateStudentSchema = joi_1.default.object({
    nivelId: joi_1.default.number().required(),
    classTimeId: joi_1.default.number().required(),
    weekdayId: joi_1.default.number().required(),
});
