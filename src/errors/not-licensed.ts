import AppError from "./app-error";

export class NotLicensed extends AppError {
    constructor(message = "Not licensed") {
        super(message, 401);
    }
}
