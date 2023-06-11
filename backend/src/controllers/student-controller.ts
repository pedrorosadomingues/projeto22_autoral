import { Request, Response } from "express";
import httpStatus from "http-status";
import {
  getAllStudentsByUserIdService,
  createStudentService,
} from "@/services";
import { GetStudentByUserIdParams } from "@/protocols";
import { Student } from "@prisma/client";

export async function postStudent(
  req: Request,
  res: Response
): Promise<Response> {
  const { name, age, nivelId, classTimeId, cpf } = req.body as Student;
  const { id } = req.params;

  try {
    await createStudentService({
      name,
      age,
      nivelId,
      classTimeId,
      cpf,
      userId: Number(id),
    });
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    if (error.name === "DuplicateCPFError") {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getStudentByUser(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;

  try {
    const result = await getAllStudentsByUserIdService(Number(id));
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
