import { Request, Response, NextFunction } from 'express';
export declare const errorHandlerMiddleware: (error: Error, req: Request, res: Response, next: NextFunction) => void;
