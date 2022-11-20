import express from "express";

const router = express();

const initWebRouters = (app) => {
    router.get('/', (req, res) => {
        return res.send('hello duy');
        }
    )

    return app.use('/', router);
}

export default initWebRouters;
