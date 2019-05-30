DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100),
department_name VARCHAR(100),
price DECIMAL(10,2),
stock_quantity INT,
primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("phone", "electronic", 100, 100),
("tablet", "electronic", 200, 100),
("brownie", "consumable", 5, 200),
("escargot", "consumable", 25, 50)