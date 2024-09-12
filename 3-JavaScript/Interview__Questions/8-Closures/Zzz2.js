
let userName = "KK";

function sayHello() {
      console.log("Hello");
}

function print() {
      console.log(userName);
      sayHello();
      let id = 123;
      function saySalam() {
            console.log("Asalamualeikum");
      }
      saySalam();
      console.log(id);
}

print();

// console.log(id);
// saySalam();          This is not possible


// Functions can have access to all the variables and function of it's parent is known as lexical scope. But the oppossite can't be possible.

// This way of bundling things in javascript is known as Closure.