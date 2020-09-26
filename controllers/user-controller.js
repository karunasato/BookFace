const User = require("../models/user");

const index = (req, res) => {
  res.render("user");
};

module.exports = {
  index,
};
