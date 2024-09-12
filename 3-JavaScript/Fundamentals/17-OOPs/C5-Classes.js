class user {
  // Constructow will call every time when an object is created
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Methods

  encryptPassword() {
    return `#%${this.password}*--`;
  }

  convertToUppercase() {
    return `${this.username.toUpperCase()}`;
  }
}

const arbab = new user("Arbab Ali", "ali@gmail.com", "5268");

console.log(arbab.encryptPassword());
console.log(arbab.password);

// -> Behind the scene of The Above Class

// function user(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// user.prototype.encryptPassword = function () {
//   return `#%${this.password}*--`;
// };

// user.prototype.convertToUppercase = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const ayan = new user("Sk Ayan", "ayan@gmail.com", "2534");

// console.log(ayan.encryptPassword());
// console.log(ayan.email);
