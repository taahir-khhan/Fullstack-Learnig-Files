// What is TypeScript?
// TypeScript is a superset of JavaScript that adds static typing.
// It compiles to plain JavaScript but helps catch errors during development.

// Why is it useful?
// 1. Catches errors early
// 2. Improves code clarity with explicit types.
// 3. Enhances tooling

// Simple Example: Without TypeScript (JavaScript)
const user = { name: "tahir", age: 23 };
console.log(user.name);
// console.log(user.age.toUpperCase()); // No error until runtime - blows up, But in TypeScript it catches the error while writing this line. Because we can't convert the number type into UpperCase.

export {};
