const mySQL = require("mysql2");

const connection = mySQL.createConnection({
  host: "localhost",
  user: "root",
  database: "node",
  password: "",
});

module.exports = connection;
