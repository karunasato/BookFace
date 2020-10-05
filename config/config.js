module.exports = {
  development: {
    username: "root",
    password: process.env.sqlpw,
    database: "bookface",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "password",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable:
      "mysql://bm39a8f5w4gv73jo:b31bfasl42jty8sm@durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wychdah450qu4bos",
    dialect: "mysql",
  },
};
