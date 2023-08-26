import AppError from "./app-error";
declare class NotFound extends AppError {
    constructor(message?: string);
}
export default NotFound;
