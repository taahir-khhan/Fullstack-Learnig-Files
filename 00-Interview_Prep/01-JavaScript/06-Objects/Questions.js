// Ques1 - Object Referencing
let c = { greet: "Hey!" };
let d = c;
d.greet = "Hello";

console.log(c);
console.log(d, "\n");

// Ques2 - All the objects are passed by reference, so when we change the value of original object it will reflect in wherever it is passed.
let x = { name: "Tahir" };
let y = [x];
x.name = "kkk";
y.name = "Shoyeb"; // This will a property of "name" in array of object

console.log(x);
console.log(y, "\n");

// Ques3
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

// Ques4
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

// Ques5
const obj = {
  a: 17,
  b: 18,
  a: 33, // Here it will overwrite the previous value of a
};
console.log(obj, "\n");

// Ques6
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
console.log(nums);
