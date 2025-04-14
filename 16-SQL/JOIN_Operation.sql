CREATE TABLE customer(
customer_id INT PRIMARY KEY,
customer_name VARCHAR(50)
);

CREATE TABLE orders(
order_id INT PRIMARY KEY,
custom_id INT,
product_name VARCHAR(100),
quantity INT,
FOREIGN KEY (custom_id) REFERENCES customer(customer_id)
);

INSERT INTO customer (customer_id, customer_name)
VALUES 
(1, 'Tahir'),
(2, 'Zahir'),
(3, 'Nabil'),
(4, 'Badal'), -- Badal hasn't placed any order
(5, 'Chan'); -- Chan hasn't placed any order

INSERT INTO orders (order_id, custom_id, product_name, quantity) VALUES
(100, 1, 'Chapal', 2),
(101, 2, 'T-shirt', 4),
(102, 3, 'Cargo', 3),
(104, NULL, 'Pant', 2);
-- (105, 6, 'Ganji', 1) -- Orders with invalid customer id (custom_id)=(6) is not present in table "customer"

SELECT * FROM customer;
SELECT * FROM orders;

-- JOIN Operation
SELECT c.customer_name, o.product_name, o.quantity
FROM customer c
INNER JOIN orders o ON c.customer_id = o.custom_id; 

SELECT c.customer_name, o.product_name, o.quantity
FROM customer c
LEFT JOIN orders o ON c.customer_id = o.custom_id; 

SELECT c.customer_name, o.product_name, o.quantity
FROM customer c
RIGHT JOIN orders o ON c.customer_id = o.custom_id;

SELECT c.customer_name, o.product_name, o.quantity
FROM customer c
FULL OUTER JOIN orders o ON c.customer_id = o.custom_id;

-- Inner queries - These are expensive queries in terms of computation inside the database.
SELECT customer_name
FROM customer
WHERE customer_id IN (
	SELECT customer_id
	FROM orders
	WHERE product_name = 'T-shirt'
);