import { Router } from "express";
import { getStudentByUser } from "@/controllers";

const studentRoute = Router();

studentRoute.get("/student/:id", getStudentByUser);

export { studentRoute };