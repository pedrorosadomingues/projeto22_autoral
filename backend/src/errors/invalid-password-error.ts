import { ApplicationError } from "@/protocols";

export function invalidPasswordError(): ApplicationError {
  return {
    name: "InvalidPasswordError",
    message: "Password must have 6 characters or more.",
  };
}
