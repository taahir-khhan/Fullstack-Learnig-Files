class user {
  constructor(username) {
    this.username = username;
  }

  print() {
    console.log(`Hello ${this.username}`);
  }

  // Static property is a private property of class, instace created by this user class don't have the access to 'Static' properties.
  static userId() {
    console.log(Math.floor(Math.random * 1000));
  }
}

class child extends user {
  constructor(username, skinColor) {
    super(username);
    this.skinColor = skinColor;
  }
}

const drogo = new user("Drogon");
drogo.print();

// Static property is a private property of class, instace created by this user class don't have the access to 'Static' properties of class.
// drogo.userId();

const caraxes = new child("Caraxes", "Red");
caraxes.print();

// Inherited class instance also don't have the access to 'Static' properties.
// caraxes.userId();
