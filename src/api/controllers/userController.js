import db from '../models/index';
import app from 'express';

const router = app.Router();

const getUser = router.get('/', async (req, res) => {
    let data = await db.User.findAll();
    console.log(data);
    res.send('Hello World! Duy');
})

const postUser = router.post('/', async (req, res) => {
    const data = await new db.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })
    console.log(data);

    try {
        const user = await data.save();
        res.status(200).json(user);
    } catch (e) {
        console.log(e);
    }
})

export default {
    getUser: getUser,
    postUser: postUser
};