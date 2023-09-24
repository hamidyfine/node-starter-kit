import dotenv from 'dotenv';
import env from 'env-var';
import type { TJwtConfig } from '../types';

dotenv.config();

export const configs: TJwtConfig = {
    algorithm: 'RS256',
    hash_salt: env.get('JWT_HASH_SALT').required().asInt() || 12,
    refresh_token_expiration_time: env.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME').asString() || '7d',
    refresh_token_expiration_time_in_db: env.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME_IN_DB').asInt() || 7 * 24 * 60 * 60,
    access_token_secret_key: env.get('JWT_ACCESS_TOKEN_SECRET').required().asString(),
    refresh_token_secret_key: env.get('JWT_REFRESH_TOKEN_SECRET').required().asString(),
    access_token_expiration_time: env.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME').asString() || '1h',
};
