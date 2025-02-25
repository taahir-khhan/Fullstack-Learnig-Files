// ---- Function Basics ----

// No return type: TypeScript assumes 'any', allowing any return value. This can lead to surprises, so setting a type is usually better.
function addTwo(num: number) {
  return "Hello";
  // return num + 2;
}
console.log(addTwo(12));

// Fixed return type: Must return a string, or TypeScript flags an error. Keeps the function predictable.
function getUpperCase(val: string): string {
  return val.toUpperCase();
  // return 23;             // Error: return type is not a string
}
console.log(getUpperCase("tahir"));

// ---- Parameter Typing ----

// Typed parameters: Arguments must match the types while providing argument during this function call.
function signUpUser(username: string, email: string, isPaid: boolean) {}
signUpUser("tahir", "tahir@google.com", false);

// Default parameter: 'isPaid' is optional, It's let you skip it without breaking the code.
let loginUser = (
  email: string,
  password: string,
  isPaid: boolean = false
) => {};
loginUser("tahir@google.dev", "12keddhaedai");
loginUser("tahir@google.dev", "pass", true);

// ---- Arrays and Mapping ----

// Array type: Just like variables TypeScript figures out the type from the values of the array. Strings here make it a string array.
const heros = ["superman", "flash", "batman"];

// This would be a number aaray
// const heros = [192, 378, 465];

// Map with return type: Here it Must return string. 'hero' type comes from the array.
heros.map((hero): string => {
  return `hero name is ${hero}`;
});

// ---- Special Return Type ----

// 'never' type: For functions that never return (e.g., throw errors). Signals the code stops here.
function errorMessage(err: string): never {
  throw new Error(err);
}

export {};
