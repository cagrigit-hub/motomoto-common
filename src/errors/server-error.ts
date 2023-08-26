import AppError from "./app-error";

export class ServerError extends AppError {
  constructor(message = "Internal server error") {
    super(message, 500);
  }
}

