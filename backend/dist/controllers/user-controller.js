"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPost = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_service_1 = require("@/services/user-service");
async function userPost(req, res) {
    const { name, email, password } = req.body;
    try {
        const user = await (0, user_service_1.createTeacher)({ name, email, password });
        return res
            .status(http_status_1.default.CREATED)
            .send({ id: user.id, name: user.name, email: user.email });
    }
    catch (error) {
        if (error.name === "DuplicateEmailError") {
            return res.status(http_status_1.default.CONFLICT).send(error.message);
        }
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(error.message);
    }
}
exports.userPost = userPost;
