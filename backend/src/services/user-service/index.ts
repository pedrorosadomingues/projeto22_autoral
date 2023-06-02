import { teacher } from "@prisma/client";
import { DuplicateEmailError } from "./errors";
import { createUser } from "@/repositories";


export async function createTeacher(
  name: string,
  email: string,
  password: string
): Promise<teacher> {
  const user = await createUser(name, email, password );
  return user;
}
