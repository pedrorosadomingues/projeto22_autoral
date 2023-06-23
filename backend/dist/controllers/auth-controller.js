"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSignIn = void 0;
const http_status_1 = __importDefault(require("http-status"));
const services_1 = require("../services");
async function postSignIn(req, res) {
    const { email, password } = req.body;
    try {
        const result = await (0, services_1.signIn)({ email, password });
        return res.status(http_status_1.default.OK).send(result);
    }
    catch (error) {
        if (error.name === "InvalidCredentialsError") {
            return res.status(http_status_1.default.UNAUTHORIZED).send(error);
        }
        return res.sendStatus(http_status_1.default.NOT_FOUND);
    }
}
exports.postSignIn = postSignIn;
