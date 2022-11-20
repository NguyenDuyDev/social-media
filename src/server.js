import express from "express";
import configViewEngine from "./api/configs/viewEngine.js";
import webRouters from "./api/routers/web.js";
import connectDB from './api/config/appConfig';
import dotenv from 'dotenv';
import helmet from 'helmet';
import logger from 'winston';
import morgan from 'morgan';
import acos from "./api/config/security.js";
dotenv.config();

//app
const app = express();
configViewEngine(app);
webRouters(app);
acos(app);


//middlewere
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// connectDB();
let server = app.listen( process.env.PORT || 3000, () => {
    logger.info(`Server listening on port ${server.address().port}`);
    console.log(`Server listening on port ${server.address().port}`);
    console.log(`Server listening: http://${server.address().address}${server.address().port}`);
})






