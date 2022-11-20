import dotenv from "dotenv";
import { Sequelize } from 'sequelize';
import logger from 'winston';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        logger.info('Connection has been established successfully.');
    } catch (error) {
        logger.log('error', 'Unable to connect to the database: ' + `${error}`);
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;



