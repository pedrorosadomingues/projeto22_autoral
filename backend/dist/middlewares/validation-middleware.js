"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = exports.validateBody = void 0;
const http_status_1 = __importDefault(require("http-status"));
const errors_1 = require("@/errors");
function validateBody(schema) {
    return validate(schema, 'body');
}
exports.validateBody = validateBody;
function validateParams(schema) {
    return validate(schema, 'params');
}
exports.validateParams = validateParams;
function validate(schema, type) {
    return (req, res, next) => {
        const { error } = schema.validate(req[type], {
            abortEarly: false,
        });
        if (!error) {
            next();
        }
        else {
            res.status(http_status_1.default.BAD_REQUEST).send((0, errors_1.invalidDataError)(error.details.map((d) => d.message)));
        }
    };
}
