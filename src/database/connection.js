const Sequelize = require("sequelize");

const sequelize = new Sequelize("bookface", "root", "Myyear2020", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: false,
});
module.exports = sequelize;
