import { teacher } from "@prisma/client";
import { DuplicateEmailError } from "./errors";
import { findByEmail, createUser} from "@/repositories";

export async function validateUniqueEmail(email: string): void {
  const userWithSameEmail = await findByEmail(email);
  if (userWithSameEmail) {
    throw DuplicateEmailError();
  }
}

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<teacher> {
  validateUniqueEmail(email);

  const user = await createUser({ name, email, password });
  return user;
}
