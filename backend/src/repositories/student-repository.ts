import { Student } from "@prisma/client";
import { prisma } from "@/config";
import { CreateStudentParams, GetStudentByUserIdParams } from "@/protocols";

export async function createStudentRepository(
  params: CreateStudentParams
): Promise<Student> {
  return prisma.student.create({
    data: params,
  });
}

export async function getStudentByCpfRepository(cpf: string): Promise<Student> {
  return prisma.student.findUnique({
    where: {
      cpf,
    },
  });
}

export async function getAllStudentsByUserIdRepository(id: number): Promise<Student[]> {
  return prisma.student.findMany({
    where: {
      userId: id
    }
  });
}