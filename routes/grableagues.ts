import db from '../db/index';
import express from 'express';
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', async function (req, res) {
    const filePath = path.join(__dirname, '..', '..', 'sql', 'scripts', 'openLeagues.sql')
    const sqlCmd = fs.readFileSync(filePath, 'utf8').toString();

    try {
        const result = await db.query(sqlCmd, []);
        res.status(200).send(result.rows)
    }
    catch (error: any) {
        console.error(error.stack);
        res.status(400).send('Error loading leagues')
    }

});

export default router;