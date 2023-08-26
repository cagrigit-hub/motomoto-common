import AppError from "./app-error";

export class LoginError extends AppError {
    constructor(message = "Login failed") {
        super(message, 401);
    }
}
