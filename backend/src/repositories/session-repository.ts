import { Prisma } from "@prisma/client";
import { prisma } from "@/config";

export async function createSessionRepository(
  data: Prisma.SessionUncheckedCreateInput
) {
  return prisma.session.upsert({
    where: {
      userId: data.userId,
    },
    update: {
      token: data.token,
      updatedAt: new Date(),
    },
    create: {
      ...data,
    },
  });
}
