import db from '../db/index';
import express from 'express';
const router = express.Router();

router.post('/', async function (req, res) {
    const body = req.body

    try {
        await db.query('INSERT INTO teams (ownerusername, leagueid) VALUES ($1, $2)',
         [body.user, body.leagueid]);
        res.status(200).send('Joined League!')
    }
    catch (error: any) {
        console.error(error.stack);
        res.status(400).send('Error loading leagues')
    }

});

export default router;