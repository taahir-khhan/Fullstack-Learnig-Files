// ======== Question-1 ======== - Object Referencing
let c = { greet: "Hey!" };
let d = c;
d.greet = "Hello";

console.log(c);
console.log(d, "\n");

// ======== Question-2 ======== - All the objects are passed by reference, so when we change the value of original object it will reflect in wherever it is passed.
let x = { name: "Tahir" };
let y = [x];
x.name = "kkk";
y.name = "Shoyeb"; // This will a property of "name" in array of object

console.log(x);
console.log(y, "\n");

// ======== Question-3 ========
const value = { number: 10 };

function multiply(x = { ...value }) {
  console.log((x.number *= 2));
}

// When we don't pass the original object in the argument, in every function call it will create a clone of value object, That's why it will always give 20 as result.
multiply();
multiply();

// Here we are passing the original object, Now it will reference with the original object
multiply(value);
multiply(value);
console.log(value, "\n");

// ======== Question-4 ========
function changeAgeAndRef(person) {
  // Here it will modify the original object
  person.age = 33;

  // This does not affect user1, because person now points to a completely new object, breaking the link to the original user1 object.
  person = {
    name: "Santosh",
    age: 24,
  };

  return person;
}

const user1 = {
  name: "Tahir",
  age: 22,
};

const user2 = changeAgeAndRef(user1);

console.log(user1);
console.log(user2, "\n");

// ======== Question-5 ========
const obj = {
  a: 17,
  b: 18,
  a: 33, // Here it will overwrite the previous value of a
};
console.log(obj, "\n");

// ======== Question-6 ========
function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let nums = {
  x: 100,
  y: 12,
  title: "My nums",
};

multiplyByTwo(nums);
console.log(nums, "\n");

// ======== Question-7 ========
const func = (function (a) {
  delete a; // This does not have any effect on the passed argument
  return a;
})(5);
console.log(func, "\n");

// ======== Question-8 ========
console.log([..."Tahir"], "\n");

// ======== Question-9 ========
const someObj = {
  radius: 10,
  calculateArea: function () {
    return Math.PI * this.radius * this.radius;
  },
  calculateCircumference: () => {
    return 2 * Math.PI * this.radius;
  },
};

console.log(someObj.calculateArea());
console.log(someObj.calculateCircumference(), "\n");

// ======== Question-10 ========
console.log({ a: 10 } == { a: 10 });
// console.log({ a: 1 } === { a: 1 });

// Both will return false because both are different objects, and objects are compared by reference(means memory location) not by value.

// ======== Question-11 ========

let person = {
  name: "Gandu",
  age: Infinity,
};

const members = [person];
person = null;

console.log(members, person, "\n");
