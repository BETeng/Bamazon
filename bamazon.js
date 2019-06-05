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

})

function showItems() {
  connection.query("SELECT * FROM products", function (err, res) {
    console.table(res);
    toBuy();
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
        console.table(res);
        var itemNumber = parseFloat(answer.item); // id number
        var leftInStock = res[0].stock_quantity;
        var itemPrice = res[0].price;
        console.log(leftInStock);
        console.log('itemnumber', itemNumber);
        howMany(itemNumber, leftInStock, itemPrice);
      })
    }
    )
}

function howMany(itemNumber, leftInStock, itemPrice) {
  inquirer
    .prompt({
      name: 'quantity',
      type: 'input',
      message: 'How many of the following item would you like to buy?'
    })
    .then(function (answer) {
      if (leftInStock >= answer.quantity) {
        let stockRemaining = leftInStock - answer.quantity;
        console.log("stockRemaining", stockRemaining);
        connection.query("UPDATE products SET ? WHERE ?",[{stock_quantity: stockRemaining },
        {item_id: itemNumber}])
        var totalPrice = itemPrice * answer.quantity;
        console.log("You spent $" + totalPrice);
        showItems();
      }
      else {
        console.log("Insufficient Quantity!");
        showItems();
      }
    })
} //howmany function closing bracket
