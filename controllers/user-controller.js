const User = require('../src/models/user')

const index = (req, res) => {
  res.render('user')
}

module.exports = {
  index
}
