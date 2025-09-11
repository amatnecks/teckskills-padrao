import dotenv from 'dotenv';
import PATH from 'path';

console.log('NODE_ENV', process.env.NODE_ENV);

dotenv.config({
    path: process.env.NODE_ENV != '' && process.env.NODE_ENV != undefined ? `.env.${process.env.NODE_ENV}` : `.env`
});

export const config = {
    app_name: process.env.APP_NAME,
    app_port: process.env.APP_PORT,
    
    
db_host: process.env.db_host,
db_port: process.env.db_port,
db_database: process.env.db_database,
db_user: process.env.db_user,
db_password: process.env.db_password,
}