import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { invalidCredentialsError } from "@/errors";
import { PostSignInParams } from "@/protocols";
import { createSessionRepository, findUserByEmail } from "@/repositories";


export async function signIn({ email, password }: PostSignInParams) {
  
  const user = await findUserByEmail(email);

  if (!user) throw invalidCredentialsError();

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) throw invalidCredentialsError();

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  await createSessionRepository({ userId: user.id, token });
  
  return token ;
}
