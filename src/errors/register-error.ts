import AppError from "./app-error";

export class RegisterError extends AppError {
    constructor(message = "Register failed") {
        super(message, 401);
    }
}
