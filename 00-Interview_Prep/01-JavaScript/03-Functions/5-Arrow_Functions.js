// Normal functions
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 5));

/*
    - converting to arrow function, it is more concise way of writing function.
    - only the syntax is different & Implicit return of values for single statement. 
*/

const add2 = (a, b) => a + b;
console.log(add2(10, 20));

// with no argument
const sayHello = () => console.log("Hello arrow function");
sayHello();

// with single argument
const square = (x) => x * x;
console.log(square(5));

// when we start curly braces, if there is single statement or multi, you will always Implicitly define the return keyword
const greet = (name) => {
  const defineGreet = "Hello ";
  console.log(defineGreet + name);
  return -1;
};
console.log(greet("Tahir"));

// argument keyword
function normalArgument() {
  console.log(arguments);
}
normalArgument(1, 2, 3, 4);

// But in arrow function, it is not possible
const arrowArgument = () => {
  console.log(arguments);
};

// arrowArgument(1, 2, 3, 4);

// this keyword

const user = {
  username: "Tahir",
  normalFun() {
    console.log("Current username in normal function", this.username);
    console.log("Here this point to current object");
  },
  arrowFun: () => {
    console.log("Current username in arrow function", this.username);
    console.log(
      "Here this points to global object, that's why it is undefined"
    );
  },
};

user.normalFun();
user.arrowFun();
