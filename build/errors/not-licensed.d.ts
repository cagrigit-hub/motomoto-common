import AppError from "./app-error";
declare class NotLicensed extends AppError {
    constructor(message?: string);
}
export default NotLicensed;
