import { Router } from 'express';
import { getUser, createUser, updateUser } from '../controllers/userController.js';
import { validateCreateUser, validateUpdateUser } from '../middlewares/userMiddleware.js';

const routes = Router();

routes
    .get('/users/:id', getUser)
    .post('/users', validateCreateUser, createUser)
    .patch('/users/:id', validateUpdateUser, updateUser)
    ;

export { routes };