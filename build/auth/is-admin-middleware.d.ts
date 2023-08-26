import { Request, Response, NextFunction } from "express";
export declare const isAdminMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<void>;
