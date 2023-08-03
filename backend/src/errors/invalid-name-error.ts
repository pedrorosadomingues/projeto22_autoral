import { ApplicationError } from "@/protocols";

export function invalidNameError(): ApplicationError {
  return {
    name: "InvalidNameError",
    message: "Name must have 3 characters or more.",
  };
}
