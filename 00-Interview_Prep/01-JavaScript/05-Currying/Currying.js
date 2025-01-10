/* ======== Currying in JavaScript ========
   - Currying is a functional programming technique where a function 
     that takes multiple arguments is transformed into a sequence of functions, 
     each taking a single argument.

   - Instead of taking all arguments at once, a curried function takes them one at a time.
*/

// Example of a curried function
function curriedFunc(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}
console.log(curriedFunc(10)(20));

// Using arrow functions for a curried function
const curriedMultiply = (a) => (b) => a * b;

// Reusing the curried function
const threeTable = curriedMultiply(3);
console.log(threeTable(2));
console.log(threeTable(3));
console.log(threeTable(4));
