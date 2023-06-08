import { User } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type SignInParams = {
  email: string;
  password: string;
};

export type CreateUserParams = Pick<User, "name" | "email" | "password">;
