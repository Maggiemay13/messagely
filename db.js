/** Database connection for messagely. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

// const client = new Client(DB_URI);

let db = new Client({
  host: "/var/run/postgresql/",
  database: "messagely",
});

db.connect();

module.exports = db;
