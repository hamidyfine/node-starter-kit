import 'reflect-metadata';

import path from 'path';
import { DataSource } from 'typeorm';

import { database as config } from '../configs';

export const db: DataSource = new DataSource({
    database: config.db_name,
    dropSchema: false,
    entities: [path.join(__dirname, '../entities/*.ts')],
    host: config.host,
    logging: config.logging,
    password: config.password,
    port: config.port,
    synchronize: config.synchronize,
    type: config.type as any,
    username: config.username,
});
