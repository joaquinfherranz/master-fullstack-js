let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ejemplo'
});

// https://www.youtube.com/watch?v=73vwJrYIWFc     hasta el 2:50 aprox sin instalar codeigniter4

// https://stackoverflow.com/questions/58388639/xampp-issue-with-mac-os-catalina

// I had to first stop MACOS web server and then start Apache and MySql. The sequence I used was:

// sudo apachectl stop
// cd /Applications/XAMPP/xamppfiles
// sudo ./xampp startapache
// sudo ./xampp startmysql 
// Works fine.

/* comandos
cd /Applications/XAMPP/xamppfiles
./xampp
*/
/* Arrancar sin ftp
cd /Applications/XAMPP/xamppfiles
sudo bin/apachectl stop
sudo ./xampp startapache
sudo ./xampp startmysql
*/
/* Parar
cd /Applications/XAMPP/xamppfiles
sudo ./xampp stopmysql
sudo ./xampp stopapache
*/

console.log('hola');

connection.connect(function(err) {
  if (err) {
    throw err;
    //return console.error('error: ' + err);
  }

  console.log('Connected to the MySQL server.');
});

//var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
connection.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
connection.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});

var sql = "INSERT INTO customers (name, address) VALUES ?";
var values = [
  ['John', 'Highway 71'],
  ['Peter', 'Lowstreet 4'],
  ['Amy', 'Apple st 652'],
  ['Hannah', 'Mountain 21'],
  ['Michael', 'Valley 345'],
  ['Sandy', 'Ocean blvd 2'],
  ['Betty', 'Green Grass 1'],
  ['Richard', 'Sky st 331'],
  ['Susan', 'One way 98'],
  ['Vicky', 'Yellow Garden 2'],
  ['Ben', 'Park Lane 38'],
  ['William', 'Central st 954'],
  ['Chuck', 'Main Road 989'],
  ['Viola', 'Sideway 1633']
];
connection.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});