const obj = {
  name: "Tahir",
  age: 22,
  isLearning: true,
};

// ---- To itrate over the object we can use for in loop, we can't use other loops like for of, forEach, map etc. ----
for (key in obj) {
  console.log(key, obj[key]);
}
console.log("\n");

// ======= Merge multiple objects properties into single object =======

// ---- This will not do the task ----
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { obj1, obj2 };
console.log(obj3, "\n");

// ---- 1) First Approach ----
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4, "\n");

// ---- 2) More modern Approach ----
const obj5 = { ...obj1, ...obj2 };
console.log(obj5, "\n");

// ======= Some Object Methods =======

// ---- This will give us all the keys, all the values and all the key-value pairs of the object in an array format ----
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj), "\n");

//---- Check if the object has a specific property ----
console.log(obj.hasOwnProperty("state"));
