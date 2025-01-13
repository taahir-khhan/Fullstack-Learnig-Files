// Object Literals
const user = {
  name: "Tahir",
  "full name": "Tahir Khan",
  age: 22,
  isLearning: true,
  greeting: function () {
    console.log("Hello");
  },
};

// ======== Access ========
console.log(user.name);
console.log(user["name"]);

// console.log(user.full name); Not possible
console.log(user["full name"]); // Only way of accessing
console.log(user.age, "\n");

// ======== Modify ========
user.age = 23;
console.log(user.age); // in both way possible
user["age"] = 24;
console.log(user.age, "\n");

// ======== Delete ========
delete user.age;
console.log(user, "\n");

// ======== Object methods call ========
user.greeting();
console.log(user.greeting, "\n");

// ======== Nested objects ========
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
