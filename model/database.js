require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS || "CodeOp2022",
  database: DB_NAME || "MOUNTAINS_CHALLENGE",
  multipleStatements: true,
});

let sql = fs.readFileSync(__dirname + "/init.sql").toString();

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation was successful!");

    console.log("Closing...");
  });

  con.end();
});
