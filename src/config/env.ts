import dotenv from 'dotenv';

console.log('NODE_ENV', process.env.NODE_ENV);

dotenv.config({
    path: process.env.NODE_ENV != '' && process.env.NODE_ENV != undefined ? '.env.$ {process.env.NOME_ENV}' : '.env'
});

export const config = {
    app_name: process.env.NODE_ENV,
    app_port: process.env.NODE_PORT
}