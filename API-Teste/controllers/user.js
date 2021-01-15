class user_Controller {
  response = (req, res, next) => {
    res.send(`URL: ${req.url} | METHOD: ${req.method}`)
  }
}

module.exports = new user_Controller;