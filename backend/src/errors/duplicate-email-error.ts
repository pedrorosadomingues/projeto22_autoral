import { ApplicationError } from "@/protocols";

export function duplicateEmailError(): ApplicationError {
  return {
    name: "DuplicateEmailError",
    message: "Email already in use.",
  };
}
