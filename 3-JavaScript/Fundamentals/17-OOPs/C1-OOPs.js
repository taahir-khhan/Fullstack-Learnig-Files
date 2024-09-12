/*  new 
      - When a function is called with the 'new' keyword,Now the function will be used as a constructor.

      - It creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
*/

function user(name, age, isLoggedIn) {
  this.name = name;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
  return this.name;
}

const userOne = user("Ram", 23, true);
const userTwo = new user("Shyam", 25, false);

console.log(userOne);
console.log(userTwo);
