function print() {
  console.log("Hello World");
}

// We can write the below code due to prototype of JS
print.power = 10;

console.log(print.power);
print();
console.log(print.prototype, "\n");

function createUser(userName, price) {
  this.userName = userName;
  this.price = price;
}

// Injecting our own created function into prototype
createUser.prototype.printMe = function () {
  console.log(`Price is ${this.price}`);
};

const chai = new createUser("Chai", 20);
console.log(chai.userName);
chai.printMe();

/*

  Here's what happens behind the scenes when the new keyword is used:

  A new object is created: The 'new' keyword initiates the creation of a new JavaScript object.

  A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

  The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

  The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
