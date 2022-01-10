import db from '../db/index';
import express from 'express';
const router = express.Router();

router.get('/', async function (req, res) {

    try {
        const result = await db.query('SELECT * FROM grabteams($1)', [req.query.id]);
        if(result.rows.length === 0) {
            res.status(400).send('League does not exist');
            return;
        }
        res.status(200).send(result.rows)
    }
    catch (error: any) {
        console.error(error.stack);
        res.status(400).send('Error loading teams')
    }

});

export default router;