import { Prisma } from "@prisma/client";
import { prisma } from "@/config";

export async function findUserByEmail(email: string): Promise<string> {
    const user = await prisma.teacher.findUnique({ where: { email } });
    return user;
}