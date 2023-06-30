"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoute = void 0;
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
const studentRoute = (0, express_1.Router)();
exports.studentRoute = studentRoute;
studentRoute
    .all("/*", middlewares_1.authMiddleware)
    .post("/", (0, middlewares_1.validateBody)(schemas_1.createStudentSchema), controllers_1.postStudent)
    .get("/", controllers_1.getStudentByUser)
    .get(":studentId", controllers_1.getStudentById)
    .delete("/:studentId", controllers_1.deleteStudentById)
    .put("/:studentId", (0, middlewares_1.validateBody)(schemas_1.updateStudentSchema), controllers_1.updateStudentById);
