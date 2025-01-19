import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config as setupEnvConfig } from 'dotenv';
import express, { Express, json, NextFunction, Request, Response, urlencoded } from 'express';
import helmet from 'helmet';
import createError from 'http-errors';
import morgan from 'morgan';

import routes from '../routes';
import { env, logger } from '../utils';
import { db } from '.';

export class server {
    server: Express;

    constructor() {
        this.server = express();
    }

    setup() {
        // Setup middlewares
        this.server.use(cors());
        this.server.use(helmet({
            crossOriginResourcePolicy: false,
        }));
        this.server.use(morgan('tiny'));
        this.server.use(cookieParser());
        this.server.use(json());
        this.server.use(urlencoded({ extended: false }));

        // Setup routes
        this.server.use('/', routes);

        // Serve images from the 'images' directory
        this.server.use('/images', express.static('images'));

        // Create 404 error if requested route is not defined
        this.server.use((req: Request, res: Response, next: NextFunction) => {
            next(createError(404));
        });
    }

    async start() {
        setupEnvConfig();

        const host = env.get('SERVER_HOST').asString();
        const port = env.get('SERVER_PORT').asPortNumber();

        try {
            db.initialize()
                .then(() => logger('[database]: database is initialized...', 'info'))
                .catch((err) => logger('Error during Database initialization:', 'error', err));
            this.server.listen(port, () => logger(`[server]: server is running at ${host}:${port}`, 'info'));
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    }
}
