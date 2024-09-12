
// Callback functions
// It is a function that is passed as an argument to another function 
// which is then invoked inside the outer function to complete some kind of routine or action 

// Example-1

function sayMyName(name) {
    console.log("Hello" + name);
}

function takeInput(Callback) {
    let name = prompt("Enter name: ");
    Callback(name);
}

takeInput(sayMyName);

// Example-2

function greet(name, Callback) {
    console.log(`Hello ${name}`)
    Callback();
}

function sayWelcome() {
    console.log("Welcome!");
}

greet("Alice", sayWelcome);

// Example-3

function sum(num) {
    return num + num;   
}

function square(num) {
    return num * num;   
}

let x = function abc(cb1, cb2) {
    console.log(cb1(5) + " times hii"); // here cb1 is a function
    console.log(cb2, " times hii");  // cb2 is a variable
}
x(sum, square(3));