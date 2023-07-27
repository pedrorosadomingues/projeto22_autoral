"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("@/controllers");
const middlewares_1 = require("@/middlewares");
const schemas_1 = require("@/schemas");
const userRoute = (0, express_1.Router)();
exports.userRoute = userRoute;
userRoute.post('/sign-up', (0, middlewares_1.validateBody)(schemas_1.createUserSchema), controllers_1.userPost);
