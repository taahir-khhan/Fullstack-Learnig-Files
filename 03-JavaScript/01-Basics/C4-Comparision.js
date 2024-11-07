/* ======= Implicit Type Coercion =======

  - It is the autmatic conversion of value from one data-type to another
*/

// In the below, comparision operator convert the strings to number. Gives output as true.
console.log("2" >= 2);
console.log("03" > 2, "\n");

/*
  - Equality check == and comparision i.e >, <, >=, <= works differently in javascript.

  - Comparision converts null to a number, treating it as 0.

  - that's why (null >= 0) is true.

  - Most important thing is, comparing different types of data isn't a good practice.

  - That's why most programming language  doesn't supports it
*/

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0, "\n");

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0, "\n");

/* ======= Strict Check =======

  - In case of different type of value comparision, it returns false. And only compare simillar type values.
*/

console.log(2 === "2");
console.log(2 == "2");

/* ======== Difference between '==' & '===' operator ==========

  - Both are comparision operator.

  - '==' do some internal manipulation to different type of data doesn't care that much about simillar type.

  - But in strict '===' it compares only simillar types of values.
*/
