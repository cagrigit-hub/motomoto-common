declare abstract class AppError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
export default AppError;
