import AppError from "./app-error";
declare class ServerError extends AppError {
    constructor(message?: string);
}
export default ServerError;
