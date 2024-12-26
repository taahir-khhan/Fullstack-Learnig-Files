/* ======== Scope ========
  - A scope is place where defined variables are exist and can be recognized, beyond that scope it can't.
  
  - Scope  defines where variables and functions are "visible" and "usable", which helps us to organize the code and avoid conflicts.
*/

/* ======== Global Scope ========
  - Variables declared outside any function or block scope have global scope, which is accessible to any part of the code.
  
  - However, global variables can lead to problems in larger application due to potential naming conflicts or unintended modifications.
*/

let globalVariable = "I am global!";

function testFunction() {
  console.log(globalVariable); // Accessible here
}

testFunction();

/* ======== Local Scope (Function Scope) ========
  - Variables declared within a function scope are local to that perticular scope. 
  
  - These variables are only accessible within that scope and not outside of it.
*/

function exampleFunction() {
  let localVariable = "I am local!";
  console.log(localVariable); // Accessible here
}

exampleFunction();
console.log(localVariable); // Not Accessilbe

/* ======== Block Scope ========
  - Block scope is introduced with ES6 using let and const.
  
  - Variables declared with let or const inside a block { } are confined to that perticular block.
  
  - Variables declared with var are not block-scoped; they are either function-scoped or globally scoped.
*/

if (true) {
  let blockScopedVariable = "I am block-scoped!";
  console.log(blockScopedVariable); // Accessible here
}

console.log(blockScopedVariable); // Not Accessible
