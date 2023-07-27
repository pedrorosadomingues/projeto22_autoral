"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTeacher = void 0;
const repositories_1 = require("@/repositories");
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors_1 = require("@/errors");
async function verifyUserEmail(email) {
    const user = await (0, repositories_1.findUserByEmail)(email);
    if (user) {
        throw (0, errors_1.duplicateEmailError)();
    }
}
async function createTeacher({ name, email, password, }) {
    await verifyUserEmail(email);
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    return (0, repositories_1.createUser)({
        name,
        email,
        password: hashedPassword,
    });
}
exports.createTeacher = createTeacher;
