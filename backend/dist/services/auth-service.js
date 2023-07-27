"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("@/errors");
const repositories_1 = require("@/repositories");
async function signIn({ email, password }) {
    const user = await (0, repositories_1.findUserByEmail)(email);
    if (!user)
        throw (0, errors_1.invalidCredentialsError)();
    const passwordMatch = await bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch)
        throw (0, errors_1.invalidCredentialsError)();
    const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    await (0, repositories_1.createSessionRepository)({ userId: user.id, token });
    return { token, user };
}
exports.signIn = signIn;
