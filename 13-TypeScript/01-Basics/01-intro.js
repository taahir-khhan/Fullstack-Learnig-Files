"use strict";
// What is TypeScript?
// TypeScript is a superset of JavaScript that adds static typing.
// It compiles to plain JavaScript but helps catch errors during development.
Object.defineProperty(exports, "__esModule", { value: true });
// Why is it useful?
// 1. Catches errors early
// 2. Improves code clarity with explicit types.
// 3. Enhances tooling
// Simple Example: Without TypeScript (JavaScript)
var user = { name: "tahir", age: 23 };
console.log(user.name);
var typedUser = { name: "tahir", age: 23 };
console.log(typedUser.name);
// console.log(typedUser.age.toUpperCase()); // Error: 'toUpperCase' doesn't exist on number
// Practical Example: Function with type safety
function greet(person, greeting) {
    return "".concat(greeting, ", ").concat(person.name, "! You are ").concat(person.age, " years old.");
}
// Works fine
console.log(greet(typedUser, "Hello"));
