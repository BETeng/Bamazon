var mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'quincy99',
  database:'bamazonDB'
});

connection.connect(function(err){
  if(err) throw err;
  console.log('connected as id'+connection.threadId);
  connection.end();
})