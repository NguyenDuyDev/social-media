import userController from "../controllers/userController";

// const router = express().Router();

const webRouters = (app) => {
    // router.get('/', (req, res) => {
    //     return res.send('hello duy');
    //     }
    // )
    app.use('/user', userController.getUser);
    app.use('/user', userController.postUser);
    // return app.use('/', router);
}

export default webRouters;
