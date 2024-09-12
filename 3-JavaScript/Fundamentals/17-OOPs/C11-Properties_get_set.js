// Behind the scene wala Getter & Setter

function user(username, email) {
  this._username = username;
  this._email = email;

  Object.defineProperty(this, "username", {
    set: function (val) {
      this._username = val;
    },
    get: function () {
      return this._username.toUpperCase();
    },
  });

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (val) {
      this._email = val;
    },
  });
}

const tahir = new user("Tahir", "tahir@google.com");

console.log(tahir.email);
console.log(tahir.username);
