import { Router } from 'express';
import { getUserController } from '../controllers/userController.js';

const routes = Router();

routes
    .get('/getUser', getUserController)
    ;

export { routes };