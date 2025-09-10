


import express, {Express} from "express";
import { routes } from './routes/routes';

import cors from 'cors';
import {log} from './middlewares/log.middleware';
import { errorHandling } from "./middlewares/error-handling.middleware";


const app: Express = express ();


app.use (cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(log);




// configuracao das rotas

app.use (routes);
app.use (errorHandling);


export { app };
