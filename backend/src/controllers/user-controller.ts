import { Request, Response } from "express";
import httpStatus from "http-status";
import { createTeacher } from "@/services/user-service";

export async function userPost(req: Request, res: Response): Promise<Response> {
  const { name, email, password } = req.body;

  try {
    const user = await createTeacher({ name, email, password });
    return res
      .status(httpStatus.CREATED)
      .send({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    if (error.name === "DuplicateEmailError") {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }
    if (error.name === "InvalidPasswordError") {
      return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }
    if (error.name === "InvalidNameError") {
      return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
