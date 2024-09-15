// ========== Checking the given argument is array or not ==========

console.log("\n isArray: ", Array.isArray([23]), "\n");

// ========== Making an Array using Variables ==========

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(
  "Making Array using variables: ",
  Array.of(score1, score2, score3),
  "\n"
);

// ========== Push Operation ==========

const indian_heros = ["Hatim Tai", "ShaktiMaan", "Ra-one", "Son-Pari"];
const indian_villains = ["Kilbis", "G-one"];

indian_heros.push(indian_villains); // Make Nested Array

console.log("Push Operation: ", indian_heros, "\n");

/* ========== CONCAT ==========

     - Combines two or more arrays values into one. This method returns a new array without modifying any existing arrays.

     - We can Concat More than one array.
*/

const oils = ["Sunflower", "Ruchi", "Fortune"];
const price = [120, 90, 110];

const mergedArrOne = oils.concat(price, ["A1", "A2", "A3"]);

console.log("Concated Array: ");
console.log(mergedArrOne, "\n");

/* ========== SPREAD OPERATOR ========== 

      - Spread the elements of the both array. This is the best way to merge to array value into one.
*/
const vegies = ["Alu", "Piaj", "Began", "Dhaniya"];
const nonVeg = ["Beef", "Chicken", "Fish"];

const mergedArray = [...vegies, ...nonVeg];

console.log("Spread Operator: ");
console.log(mergedArray, "\n");

/* ========== FLAT ==========
      - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.    

      - We can specify it's depth, but infinity automatically flat all depth array.
*/

const netsed_array = [
  1,
  3,
  8,
  [5, 6],
  9,
  11,
  [14, 17, 19, [22, 27, [1, 2, [4, 8]]]],
  33,
  12,
  [1, 5],
];

console.log("Flat Array: ");
console.log(netsed_array.flat(2)); // (depth)
console.log(netsed_array.flat(Infinity));
