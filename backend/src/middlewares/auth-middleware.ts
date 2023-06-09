import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { verify } from "jsonwebtoken";
import { unauthorizedError } from "@/errors";
import { prisma } from "@/config";

export async function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.header("Authorization");

  try {
    if (!authHeader) return generateUnauthorizedResponse(res);
    const token = authHeader.replace("Bearer", "").trim();
    const { id } = verify(token, process.env.JWT_SECRET) as { id: number };
    const session = await prisma.session.findUnique({
      where: {
        token,
      },
    });
    if (!session) return generateUnauthorizedResponse(res);
    res.locals.userId = id;
    next();
  } catch (error) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

export type AuthenticatedRequest = Request & JWTParams;

type JWTParams = {
  userId: number;
};
