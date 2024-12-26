// =========== Declaring a Function ===========

function printHello() {
  console.log("Hello, World");
}

// Function Reference - Memomry address of the function
console.log(printHello, "\n");

// Function Call or Execution
printHello();

function square(num = 0) {
  // Default Parameter
  return num * num;
}

const value1 = square(4);
const value2 = square();
console.log("\n", value1, value2, "\n");

// =========== Rest Operator ===========

function calculateCartPrice(val1, val2, ...val3) {
  console.log(typeof val3, val3);

  let price = val1 + val2;
  for (i = 0; i < val3.length; i++) {
    price += val3[i];
  }

  return price;
}

console.log(calculateCartPrice(200, 400, 500, 2000, 1000, 1300), "\n");

// =========== Object in Function ===========

const phonepUser = {
  name: "Tahir",
  balance: "xxx",
  location: "Odisha",
};

function handleObject(anyObj) {
  console.log(
    `Here the user name is ${anyObj.name} & Balace is ${anyObj.balance}`,
    "\n"
  );
}

handleObject(phonepUser);

handleObject(
  {
    name: "Chada",
    balance: "Gareeb",
    location: "Kakatpur",
  },
  "\n"
);

// =========== Passing an Array ===========

const arr = [10, 20, 30, 40];

function handleArray(anyArray) {
  return anyArray[0];
}

console.log(handleArray(arr));
console.log(handleArray([11, 22, 33, 44]));
