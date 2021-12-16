import db from '../db/index';
import express from 'express';
const fs = require('fs');
const router = express.Router();

router.get('/', async function (req, res) {
    const sqlCmd = fs.readFile('../sql/scripts/openLeagues.sql').toString();

    try {
        const result = await db.query(sqlCmd, []);
        console.log(result)
        res.status(200).send('something')
    }
    catch (error: any) {
        console.error(error.stack);
        res.status(400).send('Error loading leagues')
    }

});

export default router;