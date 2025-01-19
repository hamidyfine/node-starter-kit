import type { LoggerOptions } from 'typeorm';

import { env } from '../utils';

env.config();

export type TDatabaseConfig = {
    db_name: string;
    dropSchema: boolean;
    host: string;
    logger: string;
    logging: LoggerOptions;
    password: string;
    port: number;
    synchronize: boolean;
    type: string;
    username: string;
};

export const database = {
    db_name: env.get('DB_NAME').asString() || 'mongodb://localhost:27017',
    dropSchema: false,
    host: env.get('DB_HOST').asString() || 'http://localhost',
    logger: env.get('DB_LOGGER').asString() || '',
    logging: env.get('DB_LOGGING_ALL').asBool() ? ('all' as LoggerOptions) : (env.get('DB_LOGGING_CUSTOM').asArray() as LoggerOptions),
    password: env.get('DB_PASSWORD').asString(),
    port: env.get('DB_PORT').asPortNumber() || 3000,
    synchronize: env.get('DB_SYNCHRONIZE').asBool() || true,
    type: env.get('DB_TYPE').asString() || 'mariadb',
    username: env.get('root').asString() || 'root',
};
