"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers/index");
const authRoute = (0, express_1.Router)();
exports.authRoute = authRoute;
authRoute.post('/', controllers_1.postSignIn);
