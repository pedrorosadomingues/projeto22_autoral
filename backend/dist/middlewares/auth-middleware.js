"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = require("jsonwebtoken");
const errors_1 = require("../errors/index");
const config_1 = require("../config/index");
async function authMiddleware(req, res, next) {
    const authHeader = req.header("Authorization");
    try {
        if (!authHeader)
            return generateUnauthorizedResponse(res);
        const token = authHeader.replace("Bearer", "").trim();
        const { id } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        const session = await config_1.prisma.session.findUnique({
            where: {
                token,
            },
        });
        if (!session)
            return generateUnauthorizedResponse(res);
        res.locals.userId = id;
        next();
    }
    catch (error) {
        return generateUnauthorizedResponse(res);
    }
}
exports.authMiddleware = authMiddleware;
function generateUnauthorizedResponse(res) {
    res.status(http_status_1.default.UNAUTHORIZED).send((0, errors_1.unauthorizedError)());
}
