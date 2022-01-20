const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'xxxx',
  database: 'bankkisimulaattori'
});
module.exports = connection;