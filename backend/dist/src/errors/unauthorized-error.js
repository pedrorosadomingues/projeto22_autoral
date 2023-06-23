"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorizedError = void 0;
function unauthorizedError() {
    return {
        name: "unauthorizedError",
        message: "You must be logged in",
    };
}
exports.unauthorizedError = unauthorizedError;
