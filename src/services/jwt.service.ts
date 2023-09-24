import jwt from 'jsonwebtoken';
import { jwt as jwtConfig } from '../configs';

class JwtServiceClass {
    options: jwt.SignOptions;

    constructor() {
        this.options = {
            algorithm: jwtConfig.configs.algorithm,
        };
    }

    getSecretKey(type: 'access' | 'refresh') {
        return type === 'access' ? jwtConfig.configs.access_token_secret_key : jwtConfig.configs.refresh_token_secret_key;
    }

    getExpireTime(type: 'access' | 'refresh') {
        return type === 'access' ? jwtConfig.configs.access_token_expiration_time : jwtConfig.configs.refresh_token_expiration_time;
    }

    getJwtOptions(type: 'access' | 'refresh') {
        return {
            expiresIn: this.getExpireTime(type),
        };
    }

    sign(payload: any, token_type: 'access' | 'refresh') {
        return jwt.sign(payload, this.getSecretKey(token_type), this.getJwtOptions(token_type));
    }

    verify(token: string, token_type: 'access' | 'refresh') {
        try {
            return jwt.verify(token, this.getSecretKey(token_type));
        } catch(error) {
            return false;
        }
    }

    decode(token: string) {
        return jwt.decode(token, { complete: true });
    }
}

export const JwtService = new JwtServiceClass();
