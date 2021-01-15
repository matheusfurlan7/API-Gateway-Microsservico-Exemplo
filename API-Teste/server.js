var http = require('http');
const express = require('express')
const app = express()
var logger = require('morgan');
const helmet = require('helmet');

// Proxy request - Users
var user_Controller = require('./controllers/user')
app.get('/user/*', user_Controller.response)
app.post('/user', user_Controller.response)
app.put('/user', user_Controller.response)
app.delete('/user', user_Controller.response)

// Configuração
app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var server = http.createServer(app);
server.listen(3001, () => console.log('API TESTE inicializada com sucesso!'));