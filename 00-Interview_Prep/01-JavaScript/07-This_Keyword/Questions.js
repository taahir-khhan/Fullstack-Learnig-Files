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
    name: "Boyy",
    // Here `this` is pointing to glo
    ref: this,
  };
}

const obj = makeUser();
console.log(obj.ref, "\n");

// ======= Question-3 ======= - Modify the code so that it will return name 'Boyy'
function makeUser2() {
  return {
    name: "Boyy",
    ref() {
      return this;
    },
  };
}

const obj2 = makeUser2();
console.log(obj2.ref().name);

// ======= Question-4 ======= - Create a object calculator
// let calculator = {
//   read() {
//     this.a = +prompt("a = ", 0); // prompt is the part of global object
//     this.b = +prompt("b = ", 0); // that's why, it doesn't run in node.js environment
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read(); // Run correctly in browser console
// console.log(calculator.sum());
// console.log(calculator.mul());

// ======= Question-5 =======
var length = 14;

function callback() {
  console.log(this.length);
}

const obj3 = {
  length: 88,
  method(cb) {
    cb();
  },
};

obj3.method(callback);

// ======= Question-6 ======= - Implement the code
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

const result = calc.add(5).multiply(6).subs(10).add(7);
console.log(result.total);
