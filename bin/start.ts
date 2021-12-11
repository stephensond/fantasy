import http from 'http';
import express from 'express';
import cors from 'cors';

import draft from '../routes/draft'
import newdraft from '../routes/newdraft'
import selectone from '../routes/selectone'
import selectall from '../routes/selectall'
import enddraft from '../routes/enddraft'
import adduser from '../routes/adduser'
import login from '../routes/login'
import newleague from '../routes/newleague'


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
app.use('/endDraft', enddraft);
app.use('/addUser', adduser);
app.use('/login', login);
app.use('/newleague', newleague)

