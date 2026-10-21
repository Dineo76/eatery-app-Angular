import { Request, Response, NextFunction } from 'express';
export interface AuthenticatedUser {
    id: number;
    email: string;
    role: string;
}
export interface AuthenticatedRequest extends Request {
    user?: AuthenticatedUser;
}
export declare const authenticateToken: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const requireAdmin: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authMiddleware.d.ts.map