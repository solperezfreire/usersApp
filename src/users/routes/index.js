import { Router } from 'express';
import { getUser, createUser, updateUser, deregisterUser, getAllUsers } from '../controllers/userController.js';
import { createUserSchema, updateUserSchema } from '../../utils/schemas/userSchema.js';
import { createValidator } from '../../middlewares/userMiddleware.js';

const routes = Router();

routes
    .get('/users/:id', getUser)
    .get('/users', getAllUsers)
    .post('/users', createValidator({ schema: createUserSchema }), createUser)
    .patch('/users/:id', createValidator({ schema: updateUserSchema }), updateUser)
    .patch('/users/:id/deregister', deregisterUser)
    ;

export { routes };