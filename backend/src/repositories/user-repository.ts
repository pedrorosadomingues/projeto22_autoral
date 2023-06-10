import {  User } from "@prisma/client";
import { prisma } from "@/config";
import { CreateUserParams } from "@/protocols";

export async function createUser({
  name,
  email,
  password,
}: CreateUserParams): Promise<User> {
  return prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
}

export async function findUserByEmail(email: string): Promise<User> {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}
