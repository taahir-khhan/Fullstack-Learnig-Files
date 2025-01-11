/* ======== Shadowing ========
  -  When a variable is declared within a certain scope, And the same name variable is declared in an outer scope is known as Shadowing.

  - The inner variable "shadows" the outer one, making the outer variable inaccessible in that inner scope.
*/

let name = "Outer";

function greet() {
  let name = "Inner"; // This shadows the outer 'name' variable.
  console.log(name);
}
greet();
console.log(name);

/* ======== Illegal shadowing ========
  - Illegal shadowing occurs because var is function-scoped, meaning that it is accessible anywhere within the function, including nested blocks. 
  
  - Therefore, if a variable is declared with let or const in a scope, you cannot redeclare it with var in the same function scope. Which is basically not allowed & also known as "Illegal Shadowing".
*/

function illegalShadow() {
  let x = 6;
  const y = 8;
  var z = 10;

  if (true) {
    // var x = 11; // Illegal shadowing of `x & y`, which is not possible
    // var y = 22;
    let z = 11;
    console.log(z);
  }
  console.log(x, y, z);
}

illegalShadow();

// ======== Valid shadowing ========

function validShadowing() {
  let y = 10;
  const z = 20;
  if (true) {
    // All of these is possible due to block scope nature of let & const. It doesn't matter until it is in another scope.
    let y = 30;
    const z = 40;
    console.log(y, z);
  }
  console.log(y, z); // remain consistent
}
// validShadowing();
