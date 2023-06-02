import { ApplicationError } from "@/protocols";

export function DuplicateEmailError(): ApplicationError {
  return {
    name: "DuplicateEmailError",
    message: "Email already in use",
  };
}