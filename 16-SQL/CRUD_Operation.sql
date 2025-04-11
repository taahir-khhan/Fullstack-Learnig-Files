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

