import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { invalidCredentialsError } from "@/errors";
import { SignInParams } from "@/protocols";
import { findUserByEmail } from "@/repositories";

export async function signIn({ email, password }: SignInParams) {
  
  const user = await findUserByEmail(email);

  if (!user) throw invalidCredentialsError();

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) throw invalidCredentialsError();

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token ;
}
