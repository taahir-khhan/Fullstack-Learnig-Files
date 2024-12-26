
const user = {
      name : "Tahir",
      age : 22,
      fullname : {
            first : "Tahir",
            last : "khan",
      },
};

// const name = "Roadside coder";

let {age} = user;     // This is Destructuring
// console.log(age);

let {name : myName} = user;  // Renaming the Destructure
// console.log(myName);

// For further renaming of Destructure
let {
      fullname : {last}
} = user;
// console.log(last);





// HOW TO ASSIGN TO EXISTING VARIABLE NAMES

var employee = {    // Object we want to destructure
      firstname: 'Jon',
      lastname: 'Snow',
      dateofbirth: '1990'
};

// Destructuring the object into our variables
var { firstname, lastname, dateofbirth } = employee;
console.log( firstname, lastname, dateofbirth);






// HOW TO ASSIGN NEW VARIABLE NAMES

var employee = {    // Object we want to destructure
      firstname: 'Jon',
      lastname: 'Snow',
      dateofbirth: '1990'
};

// Destructuring the object into variables with
// different names than the object variables
var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
// console.log( fn, ln, dob);






// HOW TO ASSIGN TO A VARIABLE WITH DEFAULT VALUE

var employee = {    // Object we want to destructure
      firstname: 'Jon',
      lastname: 'Snow',
      dateofbirth: '1990'
};

// Destructuring the object into variables without 
// assigning default values 
var { firstname, lastname, country } = employee;
// console.log("Without setting default values")
// console.log( firstname, lastname, country);


// Destructuring the object into variables by 
// assigning default values 
var { firstname = 'default firstname', 
      lastname = 'default lastname', 
      country = 'default country' 
} = employee;
// console.log("\n After setting default values")
// console.log( firstname, lastname, country);







/* Pros:-

It allows us to write code that is shorter and more readable, since it allows us to bundle variables inside one object and then access the individual elements in another function without using the dot notation.

Since it allows us to set default values for specific variables, it makes sure the code doesn't break in case a value is missing.

Since we can assign aliases for different variables, it allows the code to be shorter and more robust while ensuring readability and descriptive variable names.

When using large frameworks that pass objects to functions which a lot of values, if we only need one or two values, we can destructure it. This helps make the code easier to work with.

Cons:-

Using object destructuring in JavaScript has some cons too which are listed below:

If an object has a lot of variables, it becomes very tedious to destructure it. In this case, use the dot notation.

In case an object is different from what was expected and we don't account for that, it might result in bugs in the code. */