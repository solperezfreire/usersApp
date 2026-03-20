import { Router } from 'express';
import { createUserSchema, updateUserSchema } from '../../../utils/schemas/userSchema.js';
import { createValidator } from '../../middlewares/userMiddleware.js';
import { createUser, deregisterUser, getAllUsers, getUser, updateUser } from '../controllers/userController.js';


const routes = Router();

routes
    .get('/users/:id', getUser)
    .get('/users', getAllUsers)
    .post('/users', createValidator({ schema: createUserSchema }), createUser)
    .patch('/users/:id', createValidator({ schema: updateUserSchema }), updateUser)
    .patch('/users/:id/deregister', deregisterUser)
    ;

export { routes };