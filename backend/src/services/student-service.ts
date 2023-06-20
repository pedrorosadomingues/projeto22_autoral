import { Student } from "@prisma/client";
import {
  createStudentRepository,
  getStudentByCpfRepository,
  getAllStudentsByUserIdRepository,
  deleteStudentByIdRepository,
  getStudentByIdRepository,
} from "@/repositories";
import { CreateStudentParams, GetStudentByUserIdParams } from "@/protocols";
import { duplicateCpfError, duplicateEmailError } from "@/errors";
import { notFoundStudentError } from "@/errors";

async function verifyCpfStudent(cpf: string): Promise<void> {
  const student = await getStudentByCpfRepository(cpf);
  if (student) throw duplicateCpfError();
}
 async function verifyStudentUserId(studentId: number, userId: number): Promise<void> {
  const student = await getStudentByIdRepository(studentId);
  if (student.userId !== userId) throw notFoundStudentError();
}

export async function getStudentByIdService(id: number): Promise<Student> {
  const student = await getStudentByIdRepository(id);
  if (!student) throw notFoundStudentError();
  return student;
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

export async function deleteStudentByIdService(
  userId: number,
  studentId: number
): Promise<Student> {
  await verifyStudentUserId(studentId, userId);
  return deleteStudentByIdRepository(studentId);
}
