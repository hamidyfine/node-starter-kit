import type { Request, Response, NextFunction } from 'express';
import { getTokenInfo } from '../utils';
import type { TUser } from '../types';

export class UserMiddleware {
    constructor() {}

    validateToken(req: Request, res: Response, next: NextFunction) {
        const token = getTokenInfo({ req });
        return token?.is_valid_token ? next() : res.status(408).send({ error: 'Unauthorized' });
    }

    hasRole(role: string) {
        return (req: Request, res: Response, next: NextFunction) => {
            const user = getTokenInfo({ req })?.user;
            const has_role = (user as TUser)?.roles.find((e) => e === role);
            return has_role ? next() : res.status(403).send({ error: 'Access Denied' });
        };
    }

    hasAllRole(roles: Array<string>) {
        return (req: Request, res: Response, next: NextFunction) => {
            const user = getTokenInfo({ req })?.user;
            const user_roles = (user as TUser)?.roles;
            const has_role = roles.every((role) => user_roles.find((e) => e === role));
            return has_role ? next() : res.status(403).send({ error: 'Access Denied' });
        };
    }

    hasAnyRole(roles: Array<string>) {
        return (req: Request, res: Response, next: NextFunction) => {
            const user = getTokenInfo({ req })?.user;
            const user_roles = (user as TUser)?.roles;
            const has_role = roles.some((role) => user_roles.find((e) => e === role));
            return has_role ? next() : res.status(403).send({ error: 'Access Denied' });
        };
    }
}
