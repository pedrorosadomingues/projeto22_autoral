import { Router } from "express";
import { getStudentByUser, postStudent, deleteStudentById, getStudentById } from "@/controllers";
import { authMiddleware, validateBody } from "@/middlewares";
import { createStudentSchema } from "@/schemas";

const studentRoute = Router();

studentRoute
  .all("/*", authMiddleware)
  .post("/", validateBody(createStudentSchema), postStudent)
  .get("/", getStudentByUser)
  .get(":studentId", getStudentById)
  .delete("/:id", deleteStudentById);

export { studentRoute };
