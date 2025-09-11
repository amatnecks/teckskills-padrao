


import express, {Express} from "express";
import { routes } from './routes/routes';
import morgan from "morgan";
import fs from "fs";
import path from 'path';


const app: Express = express ();
const fileLog = fs.createWriteStream(path.join(__dirname, 'storage', 'access.log'), { flags: 'a'});


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(morgan('combined', { stream: fileLog}));




// configuracao das rotas

app.use (routes);

export { app };

// Testar a conexão
import { database } from './database/database';

(async () => {
    console.log(await database.query('select now() as data_atual', []));
})();

