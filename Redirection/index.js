var users = require('./users')

class Redirection {
  Router = (app) => {
    app.use('/api/users/', users);
  }
}

module.exports = new Redirection;