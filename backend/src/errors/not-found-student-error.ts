import { ApplicationError } from "@/protocols";

export function notFoundStudentError(): ApplicationError {
  return {
    name: "NotFoundStudentError",
    message: "Register your first student",
  };
}
