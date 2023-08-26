import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}
export declare const currentUser: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
