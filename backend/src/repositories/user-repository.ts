import { Prisma, teacher } from "@prisma/client";
import { prisma } from "@/config";

export async function createUser(name: string, email: string, password: string): Promise<teacher> {
  const user = await prisma.teacher.create({
    data: {
      name,
      email,
      password,
    },
  });
  return user;
}
