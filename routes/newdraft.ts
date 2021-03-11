import db from '../db';
import express from 'express';
const router = express.Router();
import * as fs from 'fs';
import * as path from 'path';

var sqlstring = path.join(__dirname, '..', 'db', 'newdraft.sql');

let query: string = "";
fs.readFile(sqlstring, 'utf8', (err, data: string) => {
    if (err) {
        console.error(err)
    }
    query = data;
})

router.post('/', function (req, res) {
    db.query(query, [])
        .then(results => res.status(200))
        .catch(err => console.error(err.stack));
});

export default router;



