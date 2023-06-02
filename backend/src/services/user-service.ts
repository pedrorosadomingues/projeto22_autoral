import { teacher } from "@prisma/client";
import { createUser } from "@/repositories";
import bcrypt from "bcrypt";

export async function createTeacher(
  name: string,
  email: string,
  password: string
): Promise<teacher> {
  const hashedPassword = await bcrypt.hash(password, 10);
  return createUser(name, email, hashedPassword); 
}
