// 1) Checking the given argument is array or not
// console.log(Array.isArray([23]))

// 2) Making an Array using Variables

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3));

// 3) Push Operation

const indian_heros = ["Hatim Tai", "ShaktiMaan", "Ra-one", "Son-Pari"];
const indian_villains = ["Kilbis", "G-one"];

// indian_heros.push(indian_villains);   // Make Nested Array
// console.log(indian_heros);
// console.log(indian_heros[4][0]);     // Accessing Nested array Elements

// ========== CONCAT ==========

/*
     - Combines two or more arrays values into one. This method returns a new array without modifying any existing arrays.

     - We can Concat More than one array
*/

const allInOne = indian_heros.concat(indian_villains, [1, 2, 3, 4]);

// console.log(allInOne);
// console.log(indian_heros);

// ========== SPREAD OPERATOR ==========

/* 
      - Spread the elements of the both array. This is the best way to merge to array value into one.
*/

const newArr2 = [...indian_heros, ...indian_villains];

// console.log(newArr2);

// ========== FLAT ==========

/*
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

console.log(netsed_array.flat(2)); // (depth)
console.log(netsed_array.flat(Infinity));
