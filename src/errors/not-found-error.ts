import AppError from "./app-error";

export class NotFound extends AppError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}
