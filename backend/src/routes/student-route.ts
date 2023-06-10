import { Router } from "express";
import { getStudentByUser, postStudent } from "@/controllers";
import { authMiddleware, validateBody } from "@/middlewares";
import { createStudentSchema } from "@/schemas";

const studentRoute = Router();

studentRoute
  .all("/*", authMiddleware)
  .post("/:id", validateBody(createStudentSchema), postStudent)
  .get("/:id", getStudentByUser);

export { studentRoute };
