import { ApplicationError } from "@/protocols";

export function unauthorizedError(): ApplicationError {
  return {
    name: "unauthorizedError",
    message: "You must be logged in",
  };
}
