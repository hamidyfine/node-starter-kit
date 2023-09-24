import { Router } from 'express';
import * as controller from '../controllers/user.controller';

export const user = Router();

user.post('/signup', controller.signup);
user.post('/login', controller.login);
user.post('/refresh', controller.refresh);
user.post('/validate', controller.validate);
