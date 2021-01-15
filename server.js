const express = require('express')
const app = express()
const helmet = require('helmet');
var logger = require('morgan');
var redirection_Roter = require('./Redirection/index')

// Proxy request - Router
redirection_Roter.Router(app);

app.use(logger('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//app.use(cookieParser());

var http = require('http');
var server = http.createServer(app);
server.listen(3000, () => console.log('API inicializada com sucesso!'));