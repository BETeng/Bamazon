var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'quincy99',
  database:'bamazonDB'
});

connection.connect(function(err){
  if(err) throw err;
  console.log('connected as id '+connection.threadId);
  toBuy();

  
})

function toBuy(){
  inquirer
    .prompt({
      name:'item',
      type:'input',
      message: 'Enter the ID number of the item you would like to buy.'
    })
    .then(function(answer){
      var query = "SELECT * FROM products WHERE item_id=?";
      connection.query(query,[(answer.item)], function(err, res){
        console.table(res)
        
        
      })
        
        }
        )
    }

