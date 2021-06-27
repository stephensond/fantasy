import http from 'http';
import express from 'express';
import cors from 'cors';

import draft from '../routes/draft.js'
import newdraft from '../routes/newdraft.js'
import selectone from '../routes/selectone.js'
import selectall from '../routes/selectall.js'
import enddraft from '../routes/enddraft.js'

const app = express();

var PORT = process.env.PORT || 9000;

const server = http.createServer(app);
server.listen(PORT);
app.use(cors());
app.use(express.json());

app.use('/id', selectone);
app.use('/all', selectall);
app.use('/draft', draft);
app.use('/newDraft', newdraft);
app.use('/endDraft', enddraft)

