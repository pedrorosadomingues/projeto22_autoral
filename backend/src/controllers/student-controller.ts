import { Request, Response } from "express";
import httpStatus from "http-status";
import {
  getAllStudentsByUserIdService,
  createStudentService,
  deleteStudentByIdService,
  getStudentByIdService,
} from "@/services";
import { GetStudentByUserIdParams } from "@/protocols";
import { Student } from "@prisma/client";

export async function postStudent(
  req: Request,
  res: Response
): Promise<Response> {
  const { name, age, nivelId, classTimeId, cpf, weekdayId } = req.body as Student;
  const { userId } = res.locals;

  try {
    await createStudentService({
      name,
      age: Number(age),
      nivelId: Number(nivelId),
      classTimeId: Number(classTimeId),
      cpf,
      userId: Number(userId),
      weekdayId: Number(weekdayId)
    });
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    if (error.name === "DuplicateCPFError") {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getStudentById(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;

  try {
    const result = await getStudentByIdService(Number(id));
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}

export async function getStudentByUser(
  req: Request,
  res: Response
): Promise<Response> {
  const userId = res.locals.userId;

  try {
    const result = await getAllStudentsByUserIdService(Number(userId));
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function deleteStudentById(
  req: Request,
  res: Response
): Promise<Response> {
  const { userId, studentId } =
    req.params as unknown as GetStudentByUserIdParams;

  try {
    await deleteStudentByIdService(studentId, userId);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}
