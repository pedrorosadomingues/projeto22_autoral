import { Router } from "express";
import {
  getStudentByUser,
  postStudent,
  deleteStudentById,
  getStudentById,
  updateStudentById,
} from "@/controllers";
import { authMiddleware, validateBody } from "@/middlewares";
import { createStudentSchema, updateStudentSchema } from "@/schemas";

const studentRoute = Router();

studentRoute
  .all("/*", authMiddleware)
  .post("/", validateBody(createStudentSchema), postStudent)
  .get("/", getStudentByUser)
  .get(":studentId", getStudentById)
  .delete("/:studentId", deleteStudentById)
  .put("/:studentId", validateBody(updateStudentSchema), updateStudentById);

export { studentRoute };
