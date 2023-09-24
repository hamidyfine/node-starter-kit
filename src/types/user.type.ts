import { JwtPayload } from 'jsonwebtoken';

export type TUser = {
    username: string;
    password?: string;
    email: string;
    roles: Array<string>;
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
};

export type TPayload = string | JwtPayload | null | undefined;
