class user {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  /* 
      - To activate the Gettter & Setter method, you must declrae them by using constructor variable name.
      
      - Inside the getter and setter, the variable name should be different with constructor variable name, Otherwise it stucks in a infinite loop. Because with same name setter and constructor both are trying so set the value.
   */

  set username(val) {
    this._username = val;
  }
  get username() {
    return this._username.toUpperCase();
  }

  set password(val) {
    this._password = val;
  }
  get password() {
    return `!@#${this._password}^%$`;
  }
}

const vhagar = new user("Vhagar", "Aemond-Targereyen");
console.log(vhagar.username);
console.log(vhagar.password);
