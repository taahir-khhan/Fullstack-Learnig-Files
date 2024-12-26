class user {
  constructor(username) {
    this.username = username;
  }

  greet() {
    console.log(`Hello ${this.username}`);
  }
}

// Now student class will inherit all the properties of user

class student extends user {
  constructor(username, age, address) {
    // Calling func inside a function, we used call() method and passed reference of this.
    // Now in this case the super() handles all the thing properly in behind.
    super(username);
    this.age = age;
    this.address = address;
  }

  assignClass() {
    console.log(`Room no-11 is assigned to ${this.username}`);
  }
}

const ahan = new student("Ahan", 6, "Katkana");

ahan.assignClass();
ahan.greet();
console.log(ahan.address);

const pinaki = new user("Pinaki Priyadarshini");

console.log(pinaki instanceof user);
