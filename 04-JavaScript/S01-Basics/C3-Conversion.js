// ======= Conversion Into Number =======

let value = "6352";
let convertedNum = Number(value);

console.log(convertedNum);

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

console.log("\n", convertedStr);
console.log(typeof convertedStr, "\n");

/*
  33      -> "33"
  keyword -> "keyword"  
*/

// ======= Convesrion Into Boolean =======

let value3 = 0;
let convertedBool = Boolean(value3);

console.log(convertedBool);
console.log(typeof convertedBool, "\n");

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
console.log(num2, "\n");

// Concatenate
let str1 = "Hello";
let str2 = " World";
console.log(str1 + str2 + " I am Here \n");

// 2 to the power 4
console.log(2 ** 4, "\n");

// ======= Conversion to string is Very Intresting =======

console.log(1 + "2");
console.log("1" + 2);

// first it will encounter string and convert all of them into string.
console.log("1" + 2 + 2);

// first it will perform arithmetic operation, then convert to string.
console.log(1 + 2 + "2 \n");

// ======= Bad Practices =======

// Not a good practice/conversion, but print 1
console.log(+true);

// 0
console.log(+"");

// Code readibility is zero.
let n1, n2, n3, n4;
n1 = n2 = n3 = n4 = 9;

console.log(n1, n2, n3, n4);
