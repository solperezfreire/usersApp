import { Router } from 'express';
import { getUser, createUser } from '../controllers/userController.js';

const routes = Router();

routes
    .get('/users/:id', getUser)
    .post('/users', createUser)
    ;

export { routes };