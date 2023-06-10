import { Student } from "@prisma/client";
import {
  createStudentRepository,
  getStudentByCpfRepository,
  getAllStudentsByUserIdRepository,
} from "@/repositories";
import { CreateStudentParams, GetStudentByUserIdParams } from "@/protocols";
import { duplicateCpfError, duplicateEmailError } from "@/errors";
import { notFoundStudentError } from "@/errors";

async function verifyCpfStudent(cpf: string): Promise<void> {
  const student = await getStudentByCpfRepository(cpf);
  if (student) throw duplicateCpfError();
}

export async function createStudentService(
  params: CreateStudentParams
): Promise<Student> {
  await verifyCpfStudent(params.cpf);
  return createStudentRepository(params);
}

export async function getAllStudentsByUserIdService(
  id: number
): Promise<Student[]> {
  const students = await getAllStudentsByUserIdRepository(id);
  if (!students) throw notFoundStudentError();
  return students;
}
