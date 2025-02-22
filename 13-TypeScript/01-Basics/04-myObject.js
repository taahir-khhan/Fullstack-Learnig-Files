"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, number = _a.age;
}
// createUser({ name: "tahir", age: 23, email: "tahir@google.dev" }); // Here it will not take the extra property email, it will give error.
// But here it will take, without any error, Weird Behaviour
var User = { name: "tahir", age: 23, email: "tahir@google.dev" };
createUser(User);
// Here this function should return an Object
function createCourse() {
    return { name: "FullStack Web Development", isPaid: true };
}
console.log(createCourse());
// The benifit of of writing type User alias, Imagine passing 15 property inside the function parameter of separate it pass a single variable. (More clean and readable code)
function verifyUser(user) {
    console.log(user.name);
    return {
        name: "tahir",
        email: "tahir@gmail.dev",
        age: 23,
        isLearningDaily: true,
    };
}
verifyUser({
    name: "tahir",
    email: "tahir@gmail.dev",
    age: 23,
    isLearningDaily: true,
});
var myEmployee = {
    _id: 728,
    name: "Jawed",
    email: "jawed@lol.dev",
    age: 22,
};
// myEmployee._id = 2839 // Cannot assign to '_id' because it is a read-only property
myEmployee.email = "ana@google.dev";
