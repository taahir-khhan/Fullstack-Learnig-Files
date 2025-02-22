"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String variable with type annotation
var greeting = "Hello Tahir";
console.log(greeting);
console.log(greeting.toUpperCase());
// Number variable with type annotation
var myNum = 786;
console.log(myNum + greeting);
// Boolean variable with type annotation
var isLoggedIn = true;
console.log(isLoggedIn.valueOf()); // true
// TypeScript infers types, so annotations aren't always needed
// 'any' type allows any value
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
