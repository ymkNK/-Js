var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var url=require('url');
var connection = mysql.createConnection({  //ÅäÖÃÄã±¾µØµÄÊý¾Ý¿â
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
  });

// ¸ÃÂ·ÓÉÊ¹ÓÃµÄÖÐ¼ä¼þ
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());  //»ñÈ¡µ±Ç°µÄ²Ù×÷Ê±¼ä  ¿ÉÒÔÈ¡Ïû
  next();
});
router.get('/', function(req, res) {
	var params = url.parse(req.url, true).query;
	var name =params.name;
  	var newmsg = { name: name };
	connection.query('delete from phone where ?', newmsg, function(err, result) {
    if (err) throw err;
    //  返回记录的id值
    console.log('-----------------delete---------------------',newmsg);
    res.send('Delete Successfully!');
});
  
});

module.exports = router;