import db from '../db/index.js';
import express from 'express';
const router = express.Router();

router.get('/', function (req, res) {
    db.query('SELECT * from NewDraft();', [])
        .then(results => res.send(results.rows))
        .catch(err => console.error(err.stack));
});

export default router;
