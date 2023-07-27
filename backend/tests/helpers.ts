import { prisma } from "@/config";

export async function limparBanco(): Promise<void> {
  await prisma.student.deleteMany();
  await prisma.session.deleteMany();
  await prisma.weekday.deleteMany();
  await prisma.classtime.deleteMany();
  await prisma.nivel.deleteMany();
  await prisma.user.deleteMany();
  await prisma.session.deleteMany();
}
