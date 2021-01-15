const express = require('express')
const app = express()

var logger = require('morgan');
const helmet = require('helmet');

// Proxy request - User
var users = require('./Redirection/Users/Users')
app.use('/api/users/', users);

app.use(logger('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//app.use(cookieParser());

var http = require('http');
var server = http.createServer(app);
server.listen(3000, () => console.log('API inicializada com sucesso!'));