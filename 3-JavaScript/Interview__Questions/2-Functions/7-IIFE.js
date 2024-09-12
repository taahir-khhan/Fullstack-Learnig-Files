
// IIFE(Imidiately invoked function expression)
// it is used to create private scope and avoid polluting the global scope 
// it is essentially an anonymous function expression that is 
// executed immidiately after its creation.

// Example-1

(function () {
    console.log("Private Scope");
})();

// Example-2

((num) => console.log("Private Scope " + num))(2);

// Example-3

(function () {
    let privateVar = "I am private";
    (function () {
        let privateVar2 = "1 level more private";
        console.log(privateVar2);
    })();
    console.log(privateVar);
    // console.log(privateVar2); // NA
})();
