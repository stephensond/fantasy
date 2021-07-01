import db from '../db/index.js';
import express from 'express';
const router = express.Router();

router.post('/', function (req, res) {
    const body = req.body;
        db.query('SELECT UserID FROM Users WHERE username = $1 AND password = $2'
        , [body.username, body.pass])
        .then(result => {console.log(result.rows.length); return result.rows.length})
        .then(len => (len === 1) ? res.status(200).send() : res.status(400).send())
        .catch(err => console.log(err));
});

export default router;