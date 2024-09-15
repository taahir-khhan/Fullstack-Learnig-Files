const myObj = {
  name: "Learning",
  age: 23,
  isLearning: () => {
    console.log("Yes");
  },
};

// ========== Itrating Over an Object ==========
console.log("\n");

for (const key in myObj) {
  console.log(key, ":", myObj[key]);
}

console.log("\n");

// ========== Destructuring Object Key ==========

for (const [key, val, ...val2] in myObj) {
  console.log(key, val, val2);
}

console.log("\n");

// ========== Itrating over Array ==========

const myArr = [12, 14, 16, 18, 20, 22, 23, 24, 26, 27, 28, 29];

for (const idx in myArr) {
  console.log(idx, ":", myArr[idx]);
}

console.log("\n");

// ========== Destructuring Array Index ==========

for (const [subIdx0, subIdx1] in myArr) {
  console.log(subIdx0, subIdx1);
}

// ========== By using Forin Loop, We can't itrate a Map ==========

const map = new Map();

map.set(1, "AUS");
map.set(2, "IND");
map.set(3, "SA");
map.set(3, "SA");

for (const key in map) {
  console.log(key);
}
