// Question-1

const person = { name: "Tahir" };

function print(age) {
  return `${this.name} is ${age}`;
}

console.log(print.call(person, 33));
console.log(print.bind(person, 44), "\n");

// Question-2

const age = 18;

const person2 = {
  name: "Chiru",
  age: 19,
  func: function () {
    return this.age;
  },
};

const person3 = { age: 27 };
console.log(person2.func.call(person3), "\n");

// Question-3

var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      console.log("Set Timeout: ", this.status);
    },
  };

  data.getStatus();
  data.getStatus.call(this); // Will give undefined, here var doen't attach to window object, This is nodejs environment.
}, 0);

// Question-4  -> Print the species and name of the animals.

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name + "\n");
  };
  this.print();
}

// Ans
for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// Question-5 -> Append an array to another array

const arr1 = ["a", "b", "c"];
const arr2 = [4, 5, 6];

arr1.push.apply(arr1, arr2);
arr1.push(...arr2);
console.log(arr1, "\n");

// Question-6 -> Find min/max in an array

const numbers = [5, 6, 2, 3, 7];
console.log(Math.min.apply(null, numbers));
console.log(Math.max.apply(null, numbers), "\n");

// Question-7 -> Tricky question

function check() {
  // console.log(this);
}

const someObj = {
  func: check.bind(null),
};

someObj.func();

// Question-8 -> Bind Chanining - Once the function is binded, it can't be rebinded.

function c() {
  console.log(this.name, "\n");
}

c = c
  .bind({ name: "Tahir Bind Chaining" })
  .bind({ name: "Arbab bind chaining" });

c();

// Question-9 -> Run these code in browser console

function checkPassword(success, failed) {
  let password = prompt("Enter the password: ");
  if (password === "Tahir") success();
  else failed();
}

const checkPasswordObj = {
  name: "Tahir Khan",

  loginSuccess() {
    console.log(this.name + " Logged in successfully!");
  },

  loginFailed() {
    console.log(this.name + " Failed to login!");
  },
};

// checkPassword(
//   checkPasswordObj.loginSuccess.bind(checkPasswordObj),
//   checkPasswordObj.loginFailed.bind(checkPasswordObj)
// );

// Question-10 -> Enhancement of the above code

function checkPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "Tahir") ok();
  else fail();
}

let user = {
  name: "Tahir Khan",

  login(result) {
    console.log(this.name + (result ? " login successful" : " login failed"));
  },
};

// askPassword(user.login.bind(user, true), user.login.bind(user, false));

// Question-11 -> Explicit binding with arrow function

const myAge = 10;

var randomPerson = {
  name: "Piyush",
  age: 20,
  getAgeArrow: () => console.log(this.age, "\n"),
  getAge: function () {
    console.log(this.age);
  },
};

var randomPerson2 = { age: 24 };
randomPerson.getAge.call(randomPerson2);
randomPerson.getAgeArrow.call(randomPerson2);
// Note: In case of arrow function, call, apply and bind will not change the context of this keyword, it will always refer to the global object.

// Question-12 -> Polyfill for call

let car1 = {
  color: "Red",
  company: "Ferrari",
};

let car2 = {
  color: "Blue",
  company: "BMW",
};

let car3 = {
  color: "White",
  company: "Mercedes",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price} \n`
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, +"is n't callable");
  }

  context.func = this;
  context.func(...args);
};

purchaseCar.myCall(car3, "₹", "60,00,000");

// Question-13 -> Polyfill for apply

function sayMyName(name, age) {
  console.log(`${name} is ${age} purchased ${this.color} ${this.company} \n`);
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this, +"is n't callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("You should pass argumenst in an array format");
  }

  context.func = this;
  context.func(...args);
};

sayMyName.myApply(car2, ["Tahir", 24]);

// Question-14 -> Polyfill for bind

function sayMyNameAgain(currency, price) {
  console.log(`${this.color} ${this.company} is worth ${currency}${price} \n`);
}

Function.prototype.myBind = function (currentContext = {}, ...arg) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  currentContext.fn = this;
  return function (...newArgs) {
    return currentContext.fn(...arg, ...newArgs);
  };
};

const initPurchaseBmw = sayMyNameAgain.myBind(car1);
initPurchaseBmw("₹", "2,00,00,000");
initPurchaseBmw("₹", "4,00,00,000");
