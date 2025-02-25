"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String, number & boolean variable with type annotation
var greeting = "Hello Tahir";
console.log(greeting);
var myNum = 786;
console.log(myNum + greeting);
var isLoggedIn = true;
console.log(isLoggedIn.valueOf());
// When we assign the value to a variable after declaring it, At that time it is not a good practice to use annotation, Because TypeScript is smart enough to infers types automatically. There are other use cases of type annotation.
// 'any' type allows any value - that means 'hero' variable will store any type of value in future,
var hero;
function apiCall() {
    return "Heloo";
}
hero = apiCall();
console.log(hero);
// Explicit type is safer than 'any'
var someMoreHero;
someMoreHero = apiCall();
console.log(someMoreHero);
