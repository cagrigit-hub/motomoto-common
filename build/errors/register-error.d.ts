import AppError from "./app-error";
declare class RegisterError extends AppError {
    constructor(message?: string);
}
export default RegisterError;
