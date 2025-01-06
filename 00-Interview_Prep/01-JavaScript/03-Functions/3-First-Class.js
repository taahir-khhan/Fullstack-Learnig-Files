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
console.log(ans);
