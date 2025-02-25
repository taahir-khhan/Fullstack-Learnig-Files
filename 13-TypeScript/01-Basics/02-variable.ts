// String, number & boolean variable with type annotation
const greeting: string = "Hello Tahir";
console.log(greeting);

const myNum: number = 786;
console.log(myNum + greeting);

let isLoggedIn: boolean = true;
console.log(isLoggedIn.valueOf());

// When we assign the value to a variable after declaring it, At that time it is not a good practice to use annotation, Because TypeScript is smart enough to infers types automatically. There are other use cases of type annotation.

// 'any' type allows any value - that means 'hero' variable will store any type of value in future,
let hero;
function apiCall() {
  return "Heloo";
}
hero = apiCall();
console.log(hero);

// Explicit type is safer than 'any'
let someMoreHero: string;
someMoreHero = apiCall();
console.log(someMoreHero);

export {};
