import db from '../db/index';
import express from 'express';
const router = express.Router();

router.post('/', function (req, res) {
    const body = req.body;
    db.query('CALL endDraft($1)', [body])
        .then(result => res.status(200).send('success'))
        .catch(err => console.error(err.stack));
});

export default router;
