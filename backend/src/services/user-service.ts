import { User } from "@prisma/client";
import { createUser } from "@/repositories";
import bcrypt from "bcrypt";
import { CreateUserParams } from "@/protocols";

export async function createTeacher({
  name,
  email,
  password,
}: CreateUserParams): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 10);
  return createUser({
    name,
    email,
    password: hashedPassword,
});
}
