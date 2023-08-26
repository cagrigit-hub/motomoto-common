import AppError from "./app-error";
declare class InvalidCredentials extends AppError {
    constructor(message?: string);
}
export default InvalidCredentials;
