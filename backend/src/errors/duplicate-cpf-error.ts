import { ApplicationError } from "@/protocols";

export function duplicateCpfError(): ApplicationError {
  return {
    name: "DuplicateCPFError",
    message: "CPF already in use",
  };
}
