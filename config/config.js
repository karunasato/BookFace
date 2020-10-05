module.exports = {
  development: {
    username: "bm39a8f5w4gv73jo",
    password: "b31bfasl42jty8sm",
    database: "wychdah450qu4bos",
    host: "durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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
    username: "bm39a8f5w4gv73jo",
    password: "b31bfasl42jty8sm",
    database: "wychdah450qu4bos",
    host: "durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  },
};
