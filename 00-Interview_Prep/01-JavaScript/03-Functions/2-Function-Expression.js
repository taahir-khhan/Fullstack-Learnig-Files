/* Q2 - What is function Expression ? 
    
  - When we can pass a fuction as expression, means assigned to a varibles or passed as arguments.
*/

/* ======= Anonymous function expression =======
    
  - A function without a name, are often used as function expression or callback passed to other functions.

  - Anonymous function doesn't work independently
  - Ex:-  function () {
        console.log("Namatey");
      }
*/

const sum = function (x, y) {
  return x + y;
};
console.log("Anonymous function, sum is:", sum(5, 6));

// self invoking anonymous function
(function () {
  console.log("I am self invoking function, hello");
})();

function test(fun) {
  return fun(5);
}
// function passed as an argument in test()
const val = test(function (num) {
  return num * num;
});
console.log(val);

/* ======= Named function expression =======
        
  - In this case the function is only called by named(), it can't be called through ans(), because it is not defined in this scope
*/

const named = function ans(a, b) {
  console.log("Inside function:", ans); // The function itself exist only in this scope
  return a - b;
};

console.log(named(5, 6)); // Works, outputs -1
// console.log(ans); // ReferenceError: ans is not defined
