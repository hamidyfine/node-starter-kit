import { Request, Response, Router } from 'express';

import { v1 } from './v1';

const routes = Router();

// Ignore favicon route
routes.get('/favicon.ico', (req: Request, res: Response) => {
    res.status(204).end();
});

// Home route
routes.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the API project!');
});

// Versioned API routes
routes.use('/api/v1', v1);

export default routes;
