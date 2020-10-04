const Sequelize = require("sequelize");
const conn = require("../database/connection");

module.exports = conn.define("subject", {
  title: Sequelize.STRING(100),
  desc: Sequelize.STRING(100),
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
});
