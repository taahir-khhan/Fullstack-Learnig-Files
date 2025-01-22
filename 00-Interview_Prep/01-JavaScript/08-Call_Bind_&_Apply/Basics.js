// ======== Explicit Binding ========

/* ======== Call ========
  
  - The call() method invokes a function immediately, allowing you to specify the context of "this" keyword and pass arguments one by one.
*/

let obj = { name: "Tahir" };

function sayHello(age, profession) {
  console.log("Hello " + this.name + " " + age + " " + profession + "\n");
}

// Using call method, we can set the value of this to any object.
sayHello.call(obj, 12, "front-end developer");

/* ======== Apply ========
  
  - The apply() method is similar to call(), but instead of accepting arguments one by one, it accepts arguments as an array. 
*/

const person = {
  firstName: "Hamid",
  lastName: "Khan",
};

function greet(greeting, timeOfDay) {
  console.log(
    `${greeting}, ${this.firstName} ${this.lastName}. Good ${timeOfDay}! \n`
  );
}

greet.apply(person, ["Hi", "evening"]);

/* ======== Bind ========

  - The bind() method returns a new function with the specified "this" context. It does not invoke the function immediately but allows you to create a copy of the function with a preset this value and optionally preset arguments. 
*/

const person2 = {
  firstName: "Shoyeb",
  lastName: "Akhter",
};

function greetSecond(greeting, age) {
  console.log(
    `${greeting}, ${this.firstName} ${this.lastName}, age: ${age} \n`
  );
}

const greetPerson = greetSecond.bind(person2);
greetPerson("Hello", 25);
greetPerson("Hi", 30);
