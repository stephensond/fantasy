import db from '../db/index.js';
import express from 'express';
const router = express.Router();

router.post('/', function (req, res) {
    const body = req.body;
        db.query('INSERT INTO Users (Username, Password) VALUES ($1, $2)'
        , [body.username, body.pass])
        .then(result => res.status(200).send('Account successfully created'))
        .catch(err => res.status(400).send('Username taken', err.stack));
});

export default router;