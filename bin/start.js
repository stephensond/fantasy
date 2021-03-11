import http from 'http';
import express from 'express';
import cors from 'cors';

import draft from '../routes/draft.js'
import newdraft from '../routes/newdraft.js'
import selectone from '../routes/selectone.js'
import selectall from '../routes/selectall.js'

const app = express();

var PORT = 9000 || process.env.PORT;

const server = http.createServer(app);
server.listen(PORT);
app.use(cors());
app.use(express.json());

app.use('/id', selectone);
app.use('/all', selectall);
app.use('/draft', draft);
app.use('/newDraft', newdraft);

