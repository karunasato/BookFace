const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.sqldatabase,
  process.env.sqluser,
  process.env.sqlpw,
  {
    host: process.env.sqlhost,
    dialect: "mysql",
    operatorsAliases: false,
  }
);
module.exports = sequelize;
