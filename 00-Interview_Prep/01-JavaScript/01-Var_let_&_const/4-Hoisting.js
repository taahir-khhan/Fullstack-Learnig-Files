/* ========= Hoisting =========
   - Hoisting is a phenomena in javascript by which we can access variables & 
   functions even before executing them.
   
   - It is possile due to Execution Context.
*/

console.log(x);
var x = 10;

greet();
console.log(greet); // reference of the function

function greet() {
  console.log("Say Hello India");
}

// This is not possible in case of Let & Const, because it is block scoped and stored in separate memory location which is not accessible until the variables are initialized
// The time since when the let was hoisted and till it is initialized is known as Temporal Dead Zone.

// console.log(myName);      // Error
let myName = "Khan";

// Hoisting in function
var num = 44;

function print() {
  console.log(num);
  var num = 33;
}

print(); // What should be the output of the num ?

// Spread and Rest Operator
function spreadRest(...num) {
  // here it is rest operator, it combines each element into an array. It is always defined in last parameter, otherwise it won't work
  console.log(num);
}

const arr = [4, 9];
spreadRest(...arr); // here it is spread operator, it converts all the array elements into single single element
