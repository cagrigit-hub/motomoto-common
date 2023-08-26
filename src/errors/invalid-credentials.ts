import AppError from "./app-error";

export class InvalidCredentials extends AppError {
  constructor(message = "Invalid credentials") {
    super(message, 401);
  }
}

