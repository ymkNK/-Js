var http = require('http');
var mysql = require('mysql');
var res;
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT * from phone;', function (error, results, fields) {
  if (error) throw error;
	res=results;
  	console.log('name: ', results[0].name);
	console.log('number: ', results[0].number);
	console.log('name: ', results[1].name);
	console.log('number: ', results[1].number);
});


http.createServer(function (request, response) 
{

      
response.writeHead(200, {'Content-Type': 'text/plain'});

  
var index='name: '+res[0].name +
' number: '+ res[0].number+
'\r\n'+
'name: '+res[1].name +
' number: '+ res[1].number+
'\r\n';
response.write(index,'utf8');
response.end('Android use node.js+mysql£¡\r\n');

}).listen(3389);


console.log('Server running');