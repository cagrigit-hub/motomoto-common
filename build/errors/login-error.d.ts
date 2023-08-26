import AppError from "./app-error";
declare class LoginError extends AppError {
    constructor(message?: string);
}
export default LoginError;
