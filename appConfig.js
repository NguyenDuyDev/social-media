import mysql from 'mysql';
import dotenv from "dotenv";
dotenv.config();

const connect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.ROOT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

export default connect;

