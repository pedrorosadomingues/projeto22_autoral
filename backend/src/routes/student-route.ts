import { Router } from "express";
import { getStudentByUser, postStudent } from "@/controllers";

const studentRoute = Router();

studentRoute.post('/', postStudent)
studentRoute.get("/:id", getStudentByUser);

export { studentRoute };