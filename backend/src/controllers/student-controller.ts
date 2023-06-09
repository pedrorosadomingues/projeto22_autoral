import { Request, Response } from "express";
import httpStatus from "http-status";
import { getStudentByUserId, createStudent } from "@/services";
import { GetStudentByUserIdParams } from "@/protocols";
import { Student } from "@prisma/client";

export async function postStudent(
  req: Request,
  res: Response
): Promise<Response> {
  const { name, age, nivelId, classTimeId, cpf } = req.body as Student;

  try {
    await createStudent({ name, age, nivelId, classTimeId, cpf });
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }

}

export async function getStudentByUser(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;

  try {
    const result = await getStudentByUserId({ id });
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}