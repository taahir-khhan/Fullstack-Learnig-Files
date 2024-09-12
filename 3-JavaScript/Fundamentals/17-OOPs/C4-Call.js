function setUserName(userName) {
  // Some complex DB calls for checking whether this username exist or not
  this.userName = userName;
}

function createUser(userName, email, password) {
  // setUserName(userName) -> In this case nothing will happen
  setUserName.call(this, userName);
  this.email = email;
  this.password = password;
}

const tahir = new createUser("Tahir", "tahir@fb.com", "786");
console.log(tahir);
