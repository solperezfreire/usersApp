import { Router } from 'express';
import { getUserController } from '../controllers/userController.js';

const routes = Router();

routes
    .get('/users/:id', getUserController)
    ;

export { routes };