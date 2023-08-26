import AppError from "./app-error";
declare class UnauthorizedError extends AppError {
    constructor(message?: string);
}
export default UnauthorizedError;
