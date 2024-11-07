
// Normal functions

const add = function (a, b) {
    return a + b;
};

console.log(add(5,5));

// converting to arrow function, it is more concise way of writing function, 
// only the syntax is different & Implicit return of values

const add2 = (a, b) => a + b;

// More concise way of writing function, but the syntax is different
// Implicit return of values

// with no argument

const sayHello = () => console.log("Hello");

sayHello();

// with single argument

const square = x => x * x;

console.log(square(5));

// For multiple statement, we use curly braces and explicitly define return keyword

const greet = (name) => {
    const defineGreet = "Hello "
    console.log( defineGreet + name);
    return -1;
}

console.log(greet("Tahir"))
