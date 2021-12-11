import db from '../db/index';
import express from 'express';
const router = express.Router();

router.post('/', async function (req, res) {
    const body = JSON.parse(req.body);

    try {
        await db.query('CALL NewLeague($1)', [body]);
        res.status(200).send('success')

    } catch (error: any) {
        console.error(error.stack);
        res.status(400).send('League Creation Failed')
    }
});

export default router;