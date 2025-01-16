// Normal functions
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 5));

/*
    - converting to arrow function, it is more concise way of writing function.
    - only the syntax is different & Implicit return of values.
*/

const add2 = (a, b) => a + b;
console.log("Addition: ", add2(10, 20), "\n");

// with no argument
const sayHello = () => console.log("Hello arrow function \n");
sayHello();

// with single argument
const square = (x) => x * x;
console.log("X Square: ", square(5), "\n");

// when we start curly braces, if there is single statement or multi, you will always Implicitly define the return keyword
const greet = (name) => {
  const defineGreet = "Hello ";
  console.log(defineGreet + name);
  return -1;
};
console.log(greet("Tahir"), "\n");

// argument keyword
function normalArgument() {
  console.log(arguments, "\n");
}
normalArgument(1, 2, 3, 4);

// But in arrow function, we can't use argument keyword
const arrowArgument = () => {
  console.log(arguments);
};
// arrowArgument(1, 2, 3, 4);

// this keyword
const user = {
  username: "Tahir",
  normalFun() {
    console.log("Current username in normal function", this.username);
    console.log("Here this point to current object \n");
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
