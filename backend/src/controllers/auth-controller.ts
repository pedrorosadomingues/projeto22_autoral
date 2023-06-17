import { Request, Response } from "express";
import httpStatus from "http-status";
import { signIn } from "@/services";
import { PostSignInParams } from "@/protocols";

export async function postSignIn(req: Request, res: Response): Promise<Response> {
  const { email, password } = req.body as PostSignInParams;

  try {
    const result = await signIn({ email, password });
    console.log(result);

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    if (error.name === "InvalidCredentialsError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
