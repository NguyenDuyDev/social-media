// import express from "express";


function userRouter(app) {
    app.route('/users')
        .get(function (req, res) {
            res.send('Hello World!');
        })
        .post(function (req, res) {
            res.send('Got a POST request');
        })
        .put(function (req, res) {
            res.send('Got a PUT request at /user');
        })
        .delete(function (req, res) {
            res.send('Got a DELETE request at /user');
        });
}

export default userRouter;