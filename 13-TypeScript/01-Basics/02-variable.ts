// String variable with type annotation
const greeting: string = "Hello Tahir";
console.log(greeting);
console.log(greeting.toUpperCase());

// Number variable with type annotation
const myNum: number = 786;
console.log(myNum + greeting);

// Boolean variable with type annotation
let isLoggedIn: boolean = true;
console.log(isLoggedIn.valueOf()); // true

// TypeScript infers types, so annotations aren't always needed

// 'any' type allows any value
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
