/* ======== Closures ========

  - A closure is the combination of a function bundled together with references to its surrounding state.
  - It allows a function to access variables from its outer scope even after the outer function has finished executing.
  - Closures are created every time a function is defined.

*/

const name = "Tahir Khan";

function createClosure() {
  // Accessing outer scope variable
  console.log(`Outer Scope Variable: ${name}`);

  function innerFunction(num) {
    // Accessing outer scope variable and inner scope variable
    console.log(`Closure Access -> Name: ${name}, Number: ${num}`);
  }

  return innerFunction;
}

// Even if we returned the function to outside, they remember which scope they are come from and remember it's sorrounding state
createClosure()(5);

// Another Examlple
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

console.log("Sum is:", sum(1)(2)(3)(4));
