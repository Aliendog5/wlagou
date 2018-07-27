function createConn(str,json,fn){
  var mysql = require('mysql');
  //创建连接对象
  var connection = mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'lagou'
  });
  connection.connect();
  //执行sql语句查询
  connection.query(str,json,function(error, results, fields) {
      if(error) throw error;
      // console.log('The solution is: ', results);
      if(typeof(fn)=="function"){
          fn(results);
      }
      //执行关闭
      connection.end();
  });
}
module.exports = createConn;
