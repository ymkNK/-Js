var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT * from phone;', function (error, results, fields) {
  if (error) throw error;
  	console.log('name: ', results[0].name);
	console.log('number: ', results[0].number);
	console.log('name: ', results[1].name);
	console.log('number: ', results[1].number);
});