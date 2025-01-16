/*
  - IIFE(Imidiately invoked function expression)
  - it is used to create private scope and avoid polluting the global scope 
  - it is essentially an anonymous function expression which is executed immidiately after its creation. 
*/

// Example-1
(function () {
  console.log("Private Scope Anonymous fuction \n");
})();

//Example-2
((num) => console.log(`Private Scope Arrow function ${num} \n`))(2);

//Example-3
(function () {
  let privateVar = "IFFE";

  (function () {
    let privateVar2 = "IFFE Inside an IFFE";
    console.log(`${privateVar} & ${privateVar2} \n`);
  })();

  console.log(privateVar, "\n");
  // console.log(privateVar2); // Not Accessible, if you understand scoping in js you know why
})();

// We can use Named function in IFFE, But there is no way we can use Named() to call an IFFE
(function Named() {
  console.log("Named function IFFE \n");
})();
