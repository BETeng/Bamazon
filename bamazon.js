var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'quincy99',
  database: 'bamazonDB'
});

connection.connect(function (err) {
  if (err) throw err;
  showItems();
  toBuy();
})

function showItems() {
  connection.query("SELECT * FROM products", function (err, res) {
    console.table(res);
  })
}

function toBuy() {
  inquirer
    .prompt({
      name: 'item',
      type: 'input',
      message: 'Enter the ID number of the item you would like to buy.'
    })
    .then(function (answer) {
      var query = "SELECT * FROM products WHERE item_id=?";
      connection.query(query, [(answer.item)], function (err, res) {
        console.table(res)
      })
    }
    )
}

function howMany(){
  inquirer
  .prompt({
    name: 'quantity',
    type: 'input',
    message: 'How many of the following item would you like to buy?'
  })
  .then(function(answer){
    //compare amount of item to stock_quantity
      // if (stock_quantity >= answer.quantity){
      //   allow transaction to go thru
      //   log price * answer.quantity
      //   subtract answer.quantity from stock_quantity
      //   redisplay the table}
      // else{
      //   console.log("Insufficient Quantity!");
      //   toBuy();
      // }




      })
    } //howmany function closing bracket
