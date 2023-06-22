import { Request, Response } from "express";
import httpStatus from "http-status";
import {
  getAllStudentsByUserIdService,
  createStudentService,
  deleteStudentByIdService,
  getStudentByIdService,
  updateStudentByIdService,
} from "@/services";
import { GetStudentByUserIdParams } from "@/protocols";
import { Student } from "@prisma/client";
import { create } from "domain";

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
      weekdayId: Number(weekdayId),
      createdAt: new Date(),
    });
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    if (error.name === "DuplicateCPFError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.send(httpStatus.NOT_FOUND).send(error);
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
  const { userId } = res.locals;

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
  const { studentId } =req.params;
  const { userId } = res.locals;

  try {
    await deleteStudentByIdService(Number(userId), Number(studentId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}

export async function updateStudentById(
  req: Request,
  res: Response
): Promise<Response> {
  const { studentId } = req.params;
  const { name, age, nivelId, classTimeId, weekdayId } = req.body as Student;
  const { userId } = res.locals;

  try {
    await updateStudentByIdService({
      name: name,
      age: Number(age),
      nivelId: Number(nivelId),
      classTimeId: Number(classTimeId),
      weekdayId: Number(weekdayId),
      userId: Number(userId),
      id: Number(studentId),
      cpf: "",
      updatedAt: new Date(),
      createdAt: new Date(),
    });
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}