import express from "express";
import configViewEngine from "./configs/viewEngine.js";
import initWebRouters from "./routers/web.js";
import dotenv from 'dotenv';
import helmet from 'helmet';
import logger from 'winston';
import morgan from 'morgan';
import connect from '../appConfig.js';
import userRouter from './routers/users.js';
dotenv.config();
// userRouter(app);

const app = express();
configViewEngine(app);
initWebRouters(app);

//middlewere
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));


let server = app.listen( process.env.PORT || 3000, () => {
    logger.info(`Server listening on port ${server.address().port}`);
    console.log(`Server listening on port ${server.address().port}`);
})






