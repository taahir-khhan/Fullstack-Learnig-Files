-- Database Normal Form

/*  ==== 1st Normal Form ===

      - Atomicity: All the values in a column should be atomic(indivisible). Each column should contain a single not a set of values.

      - Unique column names

      - Uniqueness of record: Each record must be unique. There should be a primary key or a way identify the each record.

      - No repeating groups: There should be no multiple values stored in a single column for a record.
*/

CREATE TABLE orders(
      order_id SERIAL PRIMARY KEY,
      customer_name VARCHAR(50),
      products VARCHAR(250),
      qunatities VARCHAR(100)
);

INSERT INTO orders (customer_name, products, quantities)
VALUES ('John', 'T-shirt, Jeans', '2 1')
-- Here is the example, that no Table in the database should contain these type of multiple value, it doesn't qualify the 1st Normal form. For products and qauntities we can create separate tables.


