/* =========== IIFE (Immediately Invoked Function Expression) ===========

      - It is a JavaScript function that runs as soon as it is defined.

      - Sometimes we don't want that, global variables or anything should interefer in our function execution. (To avoid pollution from global space).

      - In this function expression JS Engine will direclty interpret the function.

      - IFFE should end with semicolon always, otherwise it will gives the error, Because after the execution of IIFE, compiler don't know where to stop.
*/

let v = 100;

// 1) Simple IIFE
((name) => {
  console.log(`Hello ${name} \n`);
})("Tahir");

// 2) Named IFFE
(function fun() {
  console.log(`Value is ${v}`);
})();
