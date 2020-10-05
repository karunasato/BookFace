const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "wychdah450qu4bos",
  "bm39a8f5w4gv73jo",
  "b31bfasl42jty8sm",
  {
    host: "durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    operatorsAliases: false,
  }
);
module.exports = sequelize;
