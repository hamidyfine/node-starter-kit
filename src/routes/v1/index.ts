import { Router } from 'express';

import users from './user.route';

const routes = Router();

// API Routes
routes.use('/users', users);

export const v1 = routes;
