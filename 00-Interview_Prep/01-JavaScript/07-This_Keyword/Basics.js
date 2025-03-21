// ====== Here `this` reffering to the global object ======
this.x = 11;
console.log(this.x, "\n");

const user = {
  name: "Tahir",
  age: 34,
  // ====== Now `this` is pointing to the user object ======
  getDetails() {
    console.log(this.name);
  },
  state: "Odisha",
  childobj: {
    myName: "Zahir",
    // ====== In this context `this` is pointing to the childobj object ======
    details() {
      console.log(this.myName, this.name, "\n");
    },
  },
};

user.getDetails();
user.childobj.details();

// ====== In case of arrow function, `this` is pointing to the global object ======

const user2 = {
  name: "Adhira",
  detail: () => console.log(this.name, "\n"),
};

user2.detail();

const user3 = {
  name: "Bhidu",
  func: function () {
    // ====== When arrow function is nested inside a normal function, then only "this" keyword points to the current object ======
    const nestedArrow = () => console.log(this.name);
    nestedArrow();
  },
};

user3.func();
