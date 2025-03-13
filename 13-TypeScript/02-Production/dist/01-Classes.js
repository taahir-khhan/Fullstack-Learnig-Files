"use strict";
console.log("Typescript is here");
let value = "something is happening";
console.log(value);
class User {
    constructor(email, name, age) {
        this.email = email;
        this.name = name;
        this.age = age;
    }
}
const hitesh = new User("tahir@google.com", "Tahir", 24);
console.log(hitesh);
class emloyees {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // Private variable can't be accessible outside the class and also whoever inherit it.
        this._courseCount = 1;
        this.emloyeeCount = 10;
    }
    get employeeEmail() {
        return `employee${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
const karim = new emloyees("karim@google.com", "Karim", "183913hehaye913");
console.log(karim);
console.log(karim.courseCount);
console.log(karim.employeeEmail);
karim.courseCount = 5;
console.log(karim.courseCount);
class intern extends emloyees {
    constructor() {
        super(...arguments);
        this.isLearningNewThings = true;
    }
    accessTheEmployeeCount() {
        this.emloyeeCount += 1;
    }
}
const yaminChoudary = new intern("yaminChoudary@google.com", "yaminChoudary", "373hh73rhau");
console.log(yaminChoudary);
