/* =========== this keyword ===========

   - store's the context of current object.
   - In global space points to the global object i.e window.  
   - Inside an object, store the reference of current object. 
*/

const user = {
  name: "Tahir",
  age: 22,
  isMature: "May be",
  obj_method: function () {
    console.log(
      `\n Name is ${this.name}, Age is ${this.age} & Mature or not ${this.isMature} \n`
    );
  },
};

user.obj_method();

// In Node environment 'this' points to Empty object, But in Browser, it points to Window Object i.e known as Global object.
console.log(this, "\n");

function abc() {
  let name = "Alama";

  // In node - contains something, But in browser points to 'window'.
  console.log(this, "\n");

  // inside a function, 'this' don't work like this.
  console.log(this.name);
}

abc();

/* =========== Arrow Functions ===========

   - An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences.

   - Declaration can be assigned to a variable , passed as an argument, called in IFFE etc.
*/

const print = () => {
  console.log("Jii boliye janab", "\n");
};

print();

// implicit return  (mein man leta hoon, apko likhne ki jaroorat nahin hai return keyword).
const mul = (num1, num2) => num1 * num2;
console.log(mul(5, 7), "\n");

// When Curly braces is used, we have to 'explicitly' define the 'return' keyword.Because we use curly braces for multiple statements.
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(5, 7), "\n");

// In this format we can't return an object
const obj = () => {
  name: "Tahir";
};
console.log(obj());

// While implicitly returnig an object - always wrap in prenthesis
const obj2 = () => ({ name: "Tahir" });
console.log(obj2());
