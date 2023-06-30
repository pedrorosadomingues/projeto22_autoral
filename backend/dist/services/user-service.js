"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTeacher = void 0;
<<<<<<< HEAD
const repositories_1 = require("../repositories");
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors_1 = require("../errors");
=======
const repositories_1 = require("../repositories/index");
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors_1 = require("../errors/index");
>>>>>>> 66f21d1b9e4e995aff4f440fa769b9ec6e8ed476
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
