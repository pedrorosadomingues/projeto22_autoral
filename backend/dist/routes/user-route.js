"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
<<<<<<< HEAD
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const schemas_1 = require("../schemas");
=======
const controllers_1 = require("../controllers/index");
const middlewares_1 = require("../middlewares/index");
const schemas_1 = require("../schemas/index");
>>>>>>> 66f21d1b9e4e995aff4f440fa769b9ec6e8ed476
const userRoute = (0, express_1.Router)();
exports.userRoute = userRoute;
userRoute.post('/sign-up', (0, middlewares_1.validateBody)(schemas_1.createUserSchema), controllers_1.userPost);
