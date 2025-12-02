import { Router } from 'express';
import { getUser, createUser, updateUser, deregisterUser } from '../controllers/userController.js';
import { validateCreateUser, validateUpdateUser } from '../middlewares/userMiddleware.js';

const routes = Router();

routes
    .get('/users/:id', getUser)
    .post('/users', validateCreateUser, createUser)
    .patch('/users/:id', validateUpdateUser, updateUser)
    .patch('/users/:id/deregister', deregisterUser)
    ;

export { routes };