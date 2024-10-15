/* ========== For Each ==========
  
  - It is an array method which itrate through array elements.

  - All the looping function takes argument a callback function

  - The CB have the access of array ele, idx and the whole array

  - It will not return anything, even if we explicitly define it.
*/

const languages = ["Odia", "Urdu", "Hindi", "English"];

// Ex-1

languages.forEach((items) => {
  console.log(items);
});

console.log("\n");

// Ex-2

function printMe(items) {
  console.log(items);
}

languages.forEach(printMe);
console.log("\n");

// Ex-3

languages.forEach((items, idx, arr) => {
  console.log(items, idx, arr);
});

console.log("\n");

// Ex-4

let lang = languages.forEach((items) => {
  return items === "Urdu";
});

console.log(lang, "\n");

// Ex-5

const mobileData = [
  {
    name: "Motrola",
    price: 15000,
  },
  {
    name: "Google Pixel",
    price: 49000,
  },
  {
    name: "I-phone",
    price: 65000,
  },
];

mobileData.forEach((items) => {
  console.log(items.name, ":", items.price);
});
