/* Q1 - What is function declaration ? 
    
    - The code below is normal function declaration, function statement or function defination
*/

function print(nums) {
  console.log(nums + " times Hello Javascript");
}

// print(5);

/* Q2 - What is function Expression ? 
    
    - When we can pass a fuction as expression, means assigned to a varibles or passed as arguments.
*/

/* ======= Anonymous function expression =======
    
    - A function without a name, are often used as function expression or callback passed to other functions.

    - Anonymous function doesn't work independently
    function () {
        console.log("Namatey");
    }
*/

const sum = function (x, y) {
  return x + y;
};
// console.log(sum(5, 6));

// self invoking anonymous function
(function () {
  console.log("hii");
})();

function test(fun) {
  return fun(5);
}
// passed as an arguments
const val = test(function (num) {
  return num * num;
});
// console.log(val);

/* ======= Named function expression =======
    
    - ans() can't be call like that, because it is not defined in this scope
*/
const named = function ans(a, b) {
  return a - b;
};
// console.log(named(5, 6));

/* ======= First class function =======
    
    - All the functions in javascript are first class citizen.
    
    - That means function are treated as data and can be manipulated just like any other data
*/

function add(a, b) {
  return a + b;
}

function takeInput(fun) {
  return fun(6, 7) + 9;
}

let ans = takeInput(add);
// console.log(ans);

/* ======= Higher order function =======
    
    - Function that operates on other function by taking them as argument
*/

function subs(a, b) {
  return a - b;
}

function performTask(x, y, fun) {
  return fun(x, y);
}

console.log("addition: " + performTask(8, 5, add));
console.log("substraction: " + performTask(8, 5, subs));
