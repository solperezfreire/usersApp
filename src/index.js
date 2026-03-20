import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { routes } from './users/routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';


const app = express();

dotenv.config();

app.use(express.json());
app.use(morgan('dev'));

app.use(routes);
app.use(errorHandler)
app.listen(3000, () => {
    console.log(`listening on port 3000`);
})