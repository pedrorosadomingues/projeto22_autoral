"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = require("express");
<<<<<<< HEAD
const controllers_1 = require("../controllers");
=======
const controllers_1 = require("../controllers/index");
>>>>>>> 66f21d1b9e4e995aff4f440fa769b9ec6e8ed476
const authRoute = (0, express_1.Router)();
exports.authRoute = authRoute;
authRoute.post('/', controllers_1.postSignIn);
