import http from 'http';
import express from 'express';
import cors from 'cors';

import draft from '../routes/draft'
import newdraft from '../routes/newdraft'
import selectone from '../routes/selectone'
import selectall from '../routes/selectall'

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

