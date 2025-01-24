const user = {
  name: "Tahir",
  age: 22,
  fullname: {
    first: "Tahir",
    last: "khan",
  },
};

// ---- Destructuring the object ----
let { name, age, fullname } = user;
console.log(name, age, fullname);

// ---- Renaming the destructured variable, It will not affect the original object ----
let { name: myName, age: myAge } = user;
console.log("\n", myName, myAge);

// ---- For nested objects ----
let {
  fullname: { last: lastName },
} = user;
console.log("\n", lastName);
