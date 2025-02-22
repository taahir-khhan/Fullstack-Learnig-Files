// ---- Function Basics ----

// No return type: TypeScript assumes 'any', allowing any return value.
// This can lead to surprises, so setting a type is usually better.
function addTwo(num: number) {
  return "Hello"; // Returns string (no error due to 'any')
  // return num + 2;  // Could return number
}
console.log(addTwo(12));

// Fixed return type: Must return a string, or TypeScript flags an error.
// Keeps the function predictable.
function getUpperCase(val: string): string {
  return val.toUpperCase(); // Returns uppercase string
  // return 23;             // Error: Not a string
}
console.log(getUpperCase("tahir"));

// ---- Parameter Typing ----

// Typed parameters: Arguments must match these types.
// Wrong types cause errors before the code runs.
function signUpUser(username: string, email: string, isPaid: boolean) {}
signUpUser("tahir", "tahir@google.com", false); // All types correct

// Default parameter: 'isPaid' is optional, defaults to false.
// Lets you skip it without breaking the code.
let loginUser = (
  email: string,
  password: string,
  isPaid: boolean = false
) => {};
loginUser("tahir@google.dev", "12keddhaedai"); // Uses default false
loginUser("tahir@google.dev", "pass", true); // Sets true

// ---- Arrays and Mapping ----

// Array type: TypeScript figures out the type from the values.
// Strings here make it a string array.
const heros = ["superman", "flash", "batman"];
// const heros = [192, 378, 465]; // Would be a number array

// Map with return type: Must return strings.
// 'hero' type comes from the array; errors show if return doesn’t match.
heros.map((hero): string => {
  return `hero name is ${hero}`;
  // return hero + 2;            // Error if strings, fine if numbers
});

// ---- Special Return Type ----

// 'never' type: For functions that never return (e.g., throw errors).
// Signals the code stops here.
function errorMessage(err: string): never {
  throw new Error(err); // Halts with an error
}

export {};
