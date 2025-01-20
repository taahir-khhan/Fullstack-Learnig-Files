// Question-1 -> What will be the output of the following code?

const person = { name: "Tahir" };

function print(age) {
  return `${this.name} is ${age}`;
}

console.log(print.call(person, 33));
console.log(print.bind(person, 44), "\n");

// Question-2 -> What will be the output of the following code?

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

// Question-3 -> What will be the output of the following code?

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
