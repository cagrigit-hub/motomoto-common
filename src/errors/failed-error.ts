import AppError from "./app-error";

export class FailedError extends AppError {
  constructor(message = "Failed") {
    super(message, 500);
  }
}
