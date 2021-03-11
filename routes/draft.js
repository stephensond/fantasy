import db from '../db/index.js';
import express from 'express';
const router = express.Router();

router.post('/', function (req, res) {
    const body = req.body;
    db.query('UPDATE draftroom SET teamid =$1 WHERE playerid=$2', [body.team, body.id])
        .then(result => res.status(200).send(body.id.toString()))
        .catch(err => console.error(err.stack));
});

export default router;