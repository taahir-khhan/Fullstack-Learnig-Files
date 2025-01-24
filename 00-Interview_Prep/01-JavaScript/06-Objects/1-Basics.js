// ========= Object Literals =========

const user = {
  name: "Tahir",
  "full name": "Tahir Khan",
  age: 22,
  isLearning: true,
  greeting: function () {
    console.log("Hello");
  },
};

// ---- Access ----

console.log("Acessing Object property values:\n", user.name);
console.log(user["name"]);
// console.log(user.full name);  // Not possible
console.log(user["full name"], "\n"); // Only way of accessing

// ---- Modify ----

user.age = 23;
console.log("Modifications:\n", user.age); // in both way possible
user["age"] = 24;
console.log(user.age, "\n");

// ---- Delete ----

delete user.age;
console.log("Deletion:\n", user, "\n");

// ---- Object methods call ----

console.log("Object Method call and reference:");
user.greeting();
console.log(user.greeting, "\n");

// ---- Nested objects ----

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

console.log("Nested objects property access: \n", person.address.street);
