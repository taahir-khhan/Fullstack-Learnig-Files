/*
  - IIFE(Imidiately invoked function expression)
  - it is used to create private scope and avoid polluting the global scope 
  - it is essentially an anonymous function expression which is executed immidiately after its creation. 
*/

// Example-1
(function () {
  console.log("Private Scope");
})();

//Example-2
((num) => console.log("Private Scope " + num))(2);

//Example-3
(function () {
  let privateVar = "I am private variable";

  (function () {
    let privateVar2 = "I am 1-level more private variable";
    console.log(privateVar2);
  })();

  console.log(privateVar);
  // console.log(privateVar2); // Not Accessible, if you understand scoping in js you know why
})();
