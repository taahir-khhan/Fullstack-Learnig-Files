const obj1 = {
  name: "Tahir",
  age: 22,
  state: "Odisha",
};

// ---- JSON.stringify convert object into string ----
const stringifiedOne = JSON.stringify(obj1);
console.log(stringifiedOne, typeof stringifiedOne);
console.log(obj1, typeof obj1, "\n");

// ---- By defining specific properties in an array in the second argument, we can convert only those properties into string ----
const stringifiedTwo = JSON.stringify(obj1, ["name", "age"]);
console.log(stringifiedTwo);

// ---- JSON.parse convert string into object ----
const parsedObject = JSON.parse(stringifiedTwo);
console.log(parsedObject, typeof parsedObject);

/* ---- Note ----
  - In local storage or sending data to the server, etc. we can't send objects directly. We need to convert them into string and then send them. and when we receive them, we need to convert them back into objects.  
*/
