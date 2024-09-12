// ======= Conversion Into Number =======

let value = 6352;
let convertedNum = Number(value);

// console.log(convertedNum);

/* Conversion of different values into number:

  "12345"  ->  12345
  true     ->  1
  false    ->  0
  "33abc"  ->  NaN , type of NaN is number
  undefind ->  NaN
*/

// ======= Convesrion Into String =======

let value2 = 1234.585675;
let convertedStr = String(value2);

// console.log(convertedStr);
// console.log(typeof convertedStr);

/*
  33      -> "33"
  keyword -> "keyword"  
*/

// ======= Convesrion Into Boolean =======

let value3 = 0;
let convertedBool = Boolean(value3);

// console.log(convertedBool);
// console.log(typeof convertedBool);

/* 
  1        -> true
  0        -> false
  number   -> true
  ""       -> false
  "string" -> true
  undefind -> flase 
*/

// ======= More Syntax in Javascript =======

let num = 33;
let num2 = -num;
// console.log(num2);

// Concatenate
let str1 = "Hello";
let str2 = " World";
// console.log(str1 + str2 + " I am Here");

// 2 to the power 4
// console.log(2**4);

// ======= Conversion to string is Very Intresting =======

// console.log(1 + "2");
// console.log("1" + 2);

// first it will encounter string and convert all of them into string.
// console.log("1" + 2 + 2);

// first it will perform arithmetic operation, then convert to string.
// console.log(1 + 2 + "2");

// ======= Bad Practices =======

// console.log(+true);            // Not a good practice/conversion, but print 1
// console.log(+"");             // 0

let n1, n2, n3, n4;
n1 = n2 = n3 = n4 = 9; // Very bad practice
// console.log(n1, n2, n3, n4);    // Code readibility is zero

/*    ======= Implicit Type Coercion =======
  - It is the autmatic conversion of value from one data-type to another
*/
