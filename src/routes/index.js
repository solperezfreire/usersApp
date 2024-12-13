import { Router } from 'express';
import { getUserController, postUserController } from '../controllers/userController.js';

const routes = Router();

routes
    .get('/users/:id', getUserController)
    .post('/users', postUserController)
    ;

export { routes };