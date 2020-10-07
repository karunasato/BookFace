require("dotenv").config();

module.exports = {
  development: {
    username: process.env.sqluser,
    password: process.env.sqlpw,
    database: process.env.sqldatabase,
    host: process.env.sqlhost,
    dialect: "mysql",
  },
  test: {
    username: process.env.sqluser,
    password: process.env.sqlpw,
    database: process.env.sqldatabase,
    host: process.env.sqlhost,
    dialect: "mysql",
  },
  production: {
    username: process.env.sqluser,
    password: process.env.sqlpw,
    database: process.env.sqldatabase,
    host: process.env.sqlhost,
    dialect: "mysql",
  },
};
