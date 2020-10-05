const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.sqldatabase,
  process.env.sqluser,
  process.env.sqlpw,
  {
    host: process.env.sqlpw,
    dialect: "mysql",
    operatorsAliases: false,
  }
);
module.exports = sequelize;
