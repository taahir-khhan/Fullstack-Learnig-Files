/* ======== Scope ========
  - A scope is place where defined variables are exist and can be recognized, beyond that scope it can't.
  
  - Scope is crucial because it dictates where variables and functions are "visible" or "usable", which helps organize code and avoid conflicts.
*/

/* ======== Global Scope ========
  - Variables declared outside any function or block have global scope.
  
  - These variables are accessible from any part of the code.
  
  - However, global variables can lead to issues in larger applications due to potential naming conflicts or unintended modifications.
*/

let globalVariable = "I am global!";

function testFunction() {
  console.log(globalVariable); // Accessible here
}

testFunction();

/* ======== Local Scope (Function Scope) ========
  - Variables declared within a function are in local or function scope.
  
  - These variables are only accessible within that function and not outside of it.
*/

function exampleFunction() {
  let localVariable = "I am local!";
  console.log(localVariable); // Accessible here
}

exampleFunction();
console.log(localVariable); // Error: localVariable is not defined

/* ======== Block Scope ========
  - Block scope is introduced with ES6 using let and const.
  
  - Variables declared with let or const inside a block { } are confined to that block.
  
  - Variables declared with var are not block-scoped; they are either function-scoped or globally scoped.
*/

if (true) {
  let blockScopedVariable = "I am block-scoped!";
  console.log(blockScopedVariable); // Accessible here
}

console.log(blockScopedVariable); // Error: blockScopedVariable is not defined
