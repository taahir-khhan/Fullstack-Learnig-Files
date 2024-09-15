/* ========== Nullish Coalescing Operator (??) ==========

    - When we fetch data from the database, At that time sometimes it returns values in null or undefind , it further creates problem in our program.

    - To Prevent these types of Error we use this operator

    - The second value is (Preventive value)
*/

// ========== Examples ==========

// Ex-1

function ran() {
  return undefined;
}

let store = ran();

if (store ?? 1) {
  console.log("\nExecuted", store, "\n");
}

// Ex-2

let val1 = 5 ?? 10;
console.log(val1);

let val2 = null ?? 10;
console.log(val2);

let val3 = undefined ?? 20;
console.log(val3);

let val4 = undefined ?? null ?? 44;
console.log(val4, "\n");

// ========== Ternary Operator ==========
// condition ? true : false;

const balance = 12;

balance !== 0
  ? console.log("I have some money")
  : console.log("I don't have any money");
