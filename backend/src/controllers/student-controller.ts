import { Request, Response } from "express";
import httpStatus from "http-status";
import { getStudentByUserId } from "@/services";
import { GetStudentByUserIdParams } from "@/protocols";

export async function getStudentByUser(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params as GetStudentByUserIdParams;

  try {
    const result = await getStudentByUserId({ id });
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
