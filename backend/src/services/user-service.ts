import { User } from "@prisma/client";
import { createUser, findUserByEmail  } from "@/repositories";
import bcrypt from "bcrypt";
import { CreateUserParams } from "@/protocols";
import { duplicateEmailError } from "@/errors";

async function verifyUserEmail(email: string): Promise<void> {
  const user = await findUserByEmail(email);
  if (user) {
    throw duplicateEmailError();
  }
}

export async function createTeacher({
  name,
  email,
  password,
}: CreateUserParams): Promise<User> {
  await verifyUserEmail(email);
  const hashedPassword = await bcrypt.hash(password, 10);
  return createUser({
    name,
    email,
    password: hashedPassword,
});
}
