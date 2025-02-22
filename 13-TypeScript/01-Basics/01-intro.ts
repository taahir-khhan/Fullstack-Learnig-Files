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
// console.log(user.age.toUpperCase()); // No error until runtime - blows up!

// With TypeScript: Explicit typing
interface User {
  name: string;
  age: number;
}

const typedUser: User = { name: "tahir", age: 23 };
console.log(typedUser.name);
// console.log(typedUser.age.toUpperCase()); // Error: 'toUpperCase' doesn't exist on number

// Practical Example: Function with type safety
function greet(person: User, greeting: string): string {
  return `${greeting}, ${person.name}! You are ${person.age} years old.`;
}
// Works fine
console.log(greet(typedUser, "Hello"));

// Errors caught by TypeScript:
// greet(typedUser, 123); // Error: Argument 'number' not assignable to 'string'
// greet({ name: "ali", age: "30" }, "Hi"); // Error: 'age' must be number

export {};
