const obj1 = {
  name: "Tahir",
  age: 22,
  state: "Odisha",
};

// JSON.stringify convert object into string
// By defining specific properties in an array, we can convert only those properties into string
const stringified = JSON.stringify(obj1, ["name", "age"]);
console.log(stringified);
console.log(typeof stringified, "\n");

// JSON.parse convert string into object
const parsedObject = JSON.parse(stringified);
console.log(parsedObject);
console.log(typeof parsedObject);

/* ======== Use Cases ======== 
  - In local storage or sending data to the server, etc. we can't send objects directly. We need to convert them into string and then send them. and when we receive them, we need to convert them back into objects.

  - JSON.stringify() is used to convert objects into strings.
  
  - JSON.parse() is used to convert strings into objects. 
*/
