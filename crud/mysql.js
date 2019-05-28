var express = require('express');
var app = express();
var mysql = require('mysql');

var GetDate = require('./getdate');        
var ShowData =require('./showdata'); 
var InsertData =require('./insertdata');
var DeleteData =require('./deletedata');
var UpdateData =require('./updatedata');
var connection = mysql.createConnection({   //�����㱾�ص����ݿ�
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
});

connection.connect();  //һֱ��������

var server = app.listen(3389, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
app.use('/show',ShowData);
app.use('/insert',InsertData);
app.use('/delete',DeleteData);
app.use('/update',UpdateData);
app.use('/get',GetDate);   //�˴���express���м��������express�Ľ̳�Ӧ�úܿ�Ͷ�