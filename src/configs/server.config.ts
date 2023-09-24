import dotenv from 'dotenv';
import env from 'env-var';
import type { TServerConfig } from '../types';

dotenv.config();

export const configs: TServerConfig = {
    db_url: env.get('DB_URL').asString() || 'mongodb://localhost:27017',
    host: env.get('HOST').asString() || 'http://localhost',
    log_level: env.get('LOG_LEVEL').asString() || 'tiny',
    port: env.get('PORT').asInt() || 3000,
};
