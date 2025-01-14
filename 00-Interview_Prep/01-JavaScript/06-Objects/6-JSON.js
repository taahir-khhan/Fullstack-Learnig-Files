const obj1 = {
  name: "Tahir",
  age: 22,
  state: "Odisha",
};

// JSON.stringify convert object into string
// By specific properties in an array, we can convert only those properties into string
const stringified = JSON.stringify(obj1, ["name", "age"]);
console.log(stringified);
console.log(typeof stringified, "\n");

// JSON.parse convert string into object
const parsedObject = JSON.parse(stringified);
console.log(parsedObject);
console.log(typeof parsedObject);
