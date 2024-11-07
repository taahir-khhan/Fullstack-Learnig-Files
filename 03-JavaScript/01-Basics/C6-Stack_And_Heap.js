// All primitive datatypes are stored in Stack
// which duplictes the value
let name1 = "Tahir";
let name2 = name1;

name1 = "Jena";
console.log("\n", name1, name2, "\n");

// All non-primitive datatypes are stored in Heap
// which gives the reference of the memory space
let user1 = {
  name: "KK Menon",
  age: 47,
};

let user2 = user1;
user2.age = 44;

console.log(user1, user2, "\n");
console.log(user1.age, user2.age);
