import db from '../db/index';
import express from 'express';
const router = express.Router();

router.get('/', function (req, res) {
    console.log("hi")
    db.query('SELECT * from players;', [])
        .then(results => res.send(results.rows))
        .catch(err => console.error(err.stack));
});

export default router;