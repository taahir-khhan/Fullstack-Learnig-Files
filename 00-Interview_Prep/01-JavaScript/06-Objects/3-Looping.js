const obj = {
  name: "Tahir",
  age: 22,
  isLearning: true,
};

// To itrate over the object we can use for in loop, we can't use other loops like for of, forEach, map etc.
for (key in obj) {
  console.log(key, obj[key]);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { obj1, obj2 };
console.log("\n", obj3, "\n");

// Merge two objects properties into one object
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4, "\n");

// More modern way to merge two objects properties into one object
const obj5 = { ...obj2, ...obj1 };
console.log(obj5, "\n");

// This will give us all the keys, values and key-value pairs of the object in an array format
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj), "\n");

// Check if the object has a specific property
console.log(obj.hasOwnProperty("state"));
