var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({  //�����㱾�ص����ݿ�
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
  });

// ��·��ʹ�õ��м��
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());  //��ȡ��ǰ�Ĳ���ʱ��  ����ȡ��
  next();
});
router.get('/', function(req, res) {
  var  sql = 'SELECT * FROM phone;';
  connection.query(sql,function (err, result) {
        if(err){
          console.log('[SHOW ERROR] - ',err.message);
          return;
        }
       console.log('--------------------------SHOW----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
      // connection.end();
       res.send(result);
 });

});

module.exports = router;