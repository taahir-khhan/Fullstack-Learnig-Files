const greeting: string = "Hello Tahir";
console.log(greeting);
console.log(greeting.toUpperCase());

// number
const myNum: number = 786;
console.log(myNum + greeting);

// boolean
let isLoggedIn: boolean = true;
console.log(isLoggedIn.valueOf());

// This not the best practice to use anotation every time you declare a variable, typescript is smart enough to know that

// any - Instead of doing that, do
let hero;

function apiCall() {
  return "Heloo";
}

hero = apiCall();
console.log(hero);

let someMoreHero: string;
someMoreHero = apiCall();

export {};
