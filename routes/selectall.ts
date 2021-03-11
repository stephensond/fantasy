import db from '../db';
import express from 'express';
const router = express.Router();

router.get('/', function (req, res) {
    db.query('SELECT * from players;', [])
        .then(results => res.send(results.rows))
        .catch(err => console.error(err.stack));
});

export default router;