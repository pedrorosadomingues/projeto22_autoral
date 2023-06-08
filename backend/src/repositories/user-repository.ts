import { Prisma, User } from "@prisma/client";
import { prisma } from "@/config";
import { CreateUserParams, SignInParams } from "@/protocols";

export async function createUser({
  name,
  email,
  password,
}: CreateUserParams): Promise<User> {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return user;
}

export async function findUserByEmail(email: string): Promise<User> {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}
