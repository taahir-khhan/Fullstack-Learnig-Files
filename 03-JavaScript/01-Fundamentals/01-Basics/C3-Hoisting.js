/*  ======= Hoisting =======

  - Hoisting is a phenomena in javascript by which we can access variables & functions even before executing them.

  - It is possile due to Execution Context.
*/

console.log(x);
var x = 10;

greet();
console.log(greet); // reference of the function

function greet() {
  console.log("Say Hello India");
}

/*
  - This is not possible in case of Let & Const, because it is block scoped and stored in separate memory location which is not accessible until the variables are initialized.
  
  -The time since when the let was hoisted and till it is initialized is known as Temporal Dead Zone.
*/

// console.log(myName);      // Error
let myName = "Khan";
