import AppError from "./app-error";
declare class ForbiddenError extends AppError {
    constructor(message?: string);
}
export default ForbiddenError;
