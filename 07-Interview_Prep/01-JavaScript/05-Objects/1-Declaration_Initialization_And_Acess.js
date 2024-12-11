
// Object Literals

const user = {
  name : "Tahir",
  "full name" : "Tahir Khan",
  "age" : 22,
  isLearning : true,
  greeting: function() {
      console.log("Hello")
  }
};

// Accessing object properties

console.log(user.name);
console.log(user["name"]);

// console.log(user.full name); this is not possible
console.log(user["full name"]); // only way of accessing
console.log(user.age);

// Modifying properties values

user.age = 27;
console.log(user.age);   // in both way possible
user["age"] = 33;
console.log(user.age);

// Object methods call

user.greeting();
user.greeting; // return whole function as value


// Nested objects

const address = {
  street: "123 Main St",
  city: "Exampleville",
  zipCode: "12345",
};

const person = {
  firstName: "Alice",
  lastName: "Johnson",
  address: address,
};

console.log(person.address.street);