-- Create table with name chai_store and with columns id, chai_name, price, chai_type & available
CREATE TABLE chai_store(
id SERIAL PRIMARY KEY ,
chai_name VARCHAR(50),
price DECIMAL(5, 2),
chai_type VARCHAR(50),
available BOOLEAN
)

-- Insert the values in the chai_store table
INSERT INTO chai_store(chai_name, price, chai_type, available)
VALUES
('Masala Chai', 30.00, 'spiced', TRUE),
('Green Chai', 25.00, 'Herbal', TRUE),
('Black Chai', 20.00, 'Classic', TRUE),
('Iced Chai', 35.00, 'Cold', FALSE),
('Oolong Chai', 40.00, 'Herbal', TRUE);

-- select all the rows from the chai_store table
SELECT * FROM chai_store;

-- select specific column 
SELECT chai_name, price FROM chai_store; 

-- select specific column with modified name
SELECT chai_name AS "Chai Name", price AS "Cost in INR" FROM chai_store

-- find all chai name that have chai word in it, % means starts and ends with anything
SELECT *
FROM chai_store
WHERE chai_name LIKE '%Chai%';
--  % means starts and ends with anything

-- Select chai which price is less than 30
SELECT *
FROM chai_store
WHERE price < 30;

-- Show chai varities sorted by price form highest to lowest
SELECT *
FROM chai_store
ORDER BY price DESC;
-- Here if we do not provide DESC, it will sort it increament format

-- Update the price of Iced Chai to 38 and make it available
UPDATE chai_store 
SET price = 38, available = TRUE
WHERE chai_name = 'Iced Chai';

-- Check
SELECT * FROM chai_store;

-- Client wants to discontinue the 'Black Chai', so delete it from the database
DELETE FROM chai_store
WHERE chai_name = 'Black Chai';

-- All the commands in SQL is devided into different categories based on their operation they perform.

/* 1) DDL (Data Defination Language)
      - DDL is used to dfine and manage database objects like tables, indexes, views, etc.
      - DDL commands deal with structure and schema of the database.

      //  ==== Commands ===
      - CREATE craetes a new database object (e.g. table, index, view).
      - ALTER modifies an existing object (e.g. adds/removes columns, changes)
      - DROP deletes an object (e.g. table, index).
      - TRUNCATE removes all rows from a table but keeps the structure.
      - RENAME Rename an existing object (e.g. table, column).
*/

-- Add new column into the table
ALTER TABLE chai_store 
ADD stocks INT DEFAULT 0;

-- Modify the existing column datatype on the table
ALTER TABLE chai_store
ALTER COLUMN price TYPE DECIMAL(12, 2);

-- delete some column from the table
ALTER TABLE chai_store
DROP COLUMN available;

-- delete the whole table
DROP TABLE chai_store;

-- Delete the data of the table, without deleting the structure of the table
TRUNCATE TABLE chai_store;

-- Rename the table name
ALTER TABLE chai_store 
RENAME TO product_store;

-- Rename the column of a table
ALTER TABLE chai_store 
RENAME COLUMN chai_name TO product_name;

/* 2) DML (Data Manipulation Language)
      - DML  commands deals with the manipulation of data inside the table.

      // === Commands ===
      - INSERT insert new data into a table
      - UPDATE modifies existing data in a table
      - DELETE removes rows from a table
      - SELECT retrieves data from the table
*/

INSERT INTO products(p_name, price, stock)
VALUES ('T-shirt', 500.00, 12);

UPDATE products
SET price = 800.00
WHERE p_name = 'T-shirt';

DELETE FROM products
WHERE p_name = 'T-shirt';

SELECT * FROM products;

/* 3) DCL (Data Control Language)
      - DCL commands deals with granting and revoking privileges on the database.

      // === commands ===
      - GRANT gives privileges to users or roles.
      - REVOKE takes away privileges from users or roles
*/

-- tahir have access to select the data from products table.
GRANT SELECT ON products TO tahir;

-- Sales team have access to insert and update the products table data.
GRANT INSERT, UPDATE ON products TO sales_team;

-- Revoke the access of tahir and sales_team
REVOKE SELECT ON products FROM tahir;
REVOKE INSERT, UPDATE ON products FROM sales_team;

/* 4) TCL (Transaction Control Language)
      - TCL commands deal with transaction management in the database. Transaction ensure that a series of DML statements are executed successfully or not at all(Atomicity).

      - In the modern ORM, it already taken care, we don't have to worry about this things

      // === Commands ===
      - BEGIN starts a transaction
      - COMMIT saves changes made during the transaction
      - ROLLBACK Undoes changes during the transaction
      - SAVEPOINT Sets a point to which a transaction can be rolled back.
*/


