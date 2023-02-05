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
  database: DB_NAME || "lake_district_fells",
  multipleStatements: true
});

let sql = fs.readFileSync(__dirname +"/init.sql").toString()

con.connect(function(err) {
  if (err) throw err;
  // should it say "an error has occurred" instead of "connected"? UPDATE: don't think so
  console.log("Connected!");

// let sql =
// "DROP TABLE if exists entries; CREATE TABLE entries (id VARCHAR(10) NOT NULL, group VARCHAR(75) NOT NULL, sub_group VARCHAR(75) NOT NULL, fell_name VARCHAR(75) NOT NULL, fell_height VARCHAR(10) NOT NULL, grid_reference VARCHAR(15) NOT NULL, date_climbed DATE NOT NULL, PRIMARY KEY (id));";

// INSERT INTO entries (
//   id,
//   group,
//   sub_group,
//   fell_name
//   fell_heightLOAD DATA LOCAL INFILE
//   grid_reference
//   date_climbed
// ) VALUES (
//   'SKD-1'
//   'Northern Fells', 
//   'Skiddaw Group',
//   'Skiddaw'
//   '931'
//   'NY260290'
//   '31/01/2023'
// );

// tried deleting (__dirname +) from below to see if it will then read the .sql file. It doesn't.) 


  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `entries` was successful!");

    console.log("Closing...");
  });

  con.end();
});


