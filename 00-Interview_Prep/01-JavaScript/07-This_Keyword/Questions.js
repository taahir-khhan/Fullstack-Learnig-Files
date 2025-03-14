//  ======= Question-1 =======

const user = {
  fullname: "Tahir",
  method() {
    const fullname = "Chada";
    // Here `this` is pointing to the user object, not the method
    console.log(this.fullname, "\n");
  },
};

user.method();

// ======= Question-2 =======

function makeUser() {
  return {
    name: "Baabuu",

    // --- Here `this` is pointing to global object ---
    // ref: this,

    // --- To make it local ---
    ref() {
      return this;
    },
  };
}

const obj = makeUser();
// console.log(obj.ref.name);
console.log(obj.ref().name, "\n");

// ======= Question-3 ======= - What is the output ?

const person = {
  name: "Piyush Bhai",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(person.logMessage, 1000);
// ----- This will give undefined because, when we pass the function as a callback to setTimeout, it is executed in the context of the global object. And it no longer has the reference to the person object.

// ----- To fix the above issue -----
setTimeout(function () {
  person.logMessage();
}, 1000);

// ======= Question-4 ======= - Create a object calculator

let calculator = {
  read() {
    // ----- For Browser -----
    // this.a = +prompt("Eneter a:");
    // this.b = +prompt("Enter b:");

    this.a = 20;
    this.b = 10;
    console.log(this.a, this.b);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log("Sum: ", calculator.sum());
console.log("Mul: ", calculator.mul(), "\n");

// ======= Question-5 =======

// In Node.js environment var type variable is not available in global scope, But in browser it is available. And we can access it using `this` keyword.
var length = 11;
function callback() {
  console.log(this.length);
}

const obj3 = {
  length: 88,
  method(cb) {
    // ----- Here incoming cb function is pointing to global object, not the obj3 object -----
    cb();
  },
  secondMethod() {
    console.log(arguments);
    // ----- Now here it will be considering the lenght of the array, and printing 4 -----
    arguments[0]();
  },
};

obj3.method(callback);
obj3.secondMethod(callback, 10, 12, 14);
console.log("\n");

// ======= Question-6 =======

// Solution
const calc = {
  total: 0,

  add(a) {
    this.total += a;
    return this;
  },

  multiply(a) {
    this.total *= a;
    return this;
  },

  subs(a) {
    this.total -= a;
    return this;
  },
};

// Implement the code
const result = calc.add(5).multiply(6).subs(10).add(7);
console.log("Total: ", result.total, "\n");
