var http = require('http');


http.createServer(function (request, response) 
{

      
response.writeHead(200, {'Content-Type': 'text/plain'});

    
   
response.end('Android use node.js��\n');

}).listen(3389);


console.log('Server running');