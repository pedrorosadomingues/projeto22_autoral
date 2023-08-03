import { User } from "@prisma/client";
import { createUser, findUserByEmail } from "@/repositories";
import bcrypt from "bcrypt";
import { CreateUserParams } from "@/protocols";
import { duplicateEmailError, invalidNameError, invalidPasswordError } from "@/errors";


async function verifyUserEmail(email: string): Promise<void> {
  const user = await findUserByEmail(email);
  if (user) {
    throw duplicateEmailError();
  }
}

 function verifyPassword(password: string): void{
  if (password.length < 6) {
    throw invalidPasswordError();
  }
}

 function verifyName(name: string): void{
  if (name.length < 3) {
    throw invalidNameError();
  }
}

export async function createTeacher({
  name,
  email,
  password,
}: CreateUserParams): Promise<User> {
  await verifyUserEmail(email);
  verifyPassword(password);
  verifyName(name);
  const hashedPassword = await bcrypt.hash(password, 10);
  return createUser({
    name,
    email,
    password: hashedPassword,
  });
}
