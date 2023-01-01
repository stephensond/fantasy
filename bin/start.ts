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
import grableagues from '../routes/grableagues'
import joinleague from '../routes/joinleague'
import grabteams from '../routes/grabteams'
import getUniqueID from '../utils/uniqueID'

const webSocketServer = require('websocket').server;

const app = express();

var PORT = process.env.PORT || 9000;

const server = http.createServer(app);
server.listen(PORT);
const wsServer = new webSocketServer({
    httpServer: server
});

const users = {};

wsServer.on('request', function(request) {
    var userID = getUniqueID();
    console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
    // Accept any connection for now
    const connection = request.accept(null, request.origin);
    users[userID] = connection;
    console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(users))
  });

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
app.use('/grableagues', grableagues)
app.use('/joinleague', joinleague)
app.use('/grabteams', grabteams)

