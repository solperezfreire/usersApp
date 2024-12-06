import express from 'express';
import morgan from 'morgan';
import { routes } from './routes/index.js'

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(routes);
app.listen(3000, () => {
    console.log(`listening on port 3000`);
})