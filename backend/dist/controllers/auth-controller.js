"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSignIn = void 0;
const http_status_1 = __importDefault(require("http-status"));
<<<<<<< HEAD
const services_1 = require("../services");
=======
const services_1 = require("../services/index");
>>>>>>> 66f21d1b9e4e995aff4f440fa769b9ec6e8ed476
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
<<<<<<< HEAD
        return res.sendStatus(http_status_1.default.NOT_FOUND);
=======
        return res.status(http_status_1.default.NOT_FOUND).send(error.message);
>>>>>>> 66f21d1b9e4e995aff4f440fa769b9ec6e8ed476
    }
}
exports.postSignIn = postSignIn;
