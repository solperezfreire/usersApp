import { Router } from 'express';
import { getUser, createUser } from '../controllers/userController.js';
import { validateUser } from '../middlewares/userMiddleware.js';

const routes = Router();

routes
    .get('/users/:id', getUser)
    .post('/users', validateUser, createUser)
    ;

export { routes };