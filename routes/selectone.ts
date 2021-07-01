import db from '../db/index';
import express from 'express'
const router = express.Router();

router.get('/:id', function (req, res) {
    db.query('SELECT * from players WHERE playerid=$1', [req.params.id])
        .then(results => res.status(200).send(results.rows[0]))
        .catch(err => console.error(err.stack));
});

export default router;

