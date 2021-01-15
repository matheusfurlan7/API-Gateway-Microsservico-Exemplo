// Proxy no 
const httpProxy = require('express-http-proxy')
const user = httpProxy('http://localhost:3001');

var express = require('express')
var router = express.Router();

router.all('/*', (req, res, next) => {
  user(req, res, next);
});

module.exports = router;