import { Request, Response,Router } from 'express';

const users = Router();

users.get('/', ((req: Request, res: Response) => {
    res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
}));

export default users;
