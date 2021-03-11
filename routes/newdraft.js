import db from '../db/index.js';
import express from 'express';
const router = express.Router();
import * as fs from 'fs';
import path  from 'path';

var sqlstring = path.join(path.resolve(), 'db', 'newdraft.sql');

let query = "";
fs.readFile(sqlstring, 'utf8', (err, data) => {
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



