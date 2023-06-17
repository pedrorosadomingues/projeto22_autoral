import { User } from "@prisma/client";
import { Student } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type PostSignInParams = {
  email: string;
  password: string;
};

export type CreateUserParams = Pick<User, "name" | "email" | "password">;

export type CreateStudentParams = Omit<Student, "id" | "createdAt" | "updatedAt" >;

export type GetStudentByUserIdParams = {
  userId: number;
  studentId: number;
}
