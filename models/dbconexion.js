var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"lab16"
});
conn.connect();
module.exports = conn;
