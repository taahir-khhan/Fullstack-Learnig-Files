
// Object referencing
// Question-1

let c = {greet : "Hey!"};

let d = c;
d.greet = "Hello";
// console.log(c);
// console.log(d);


// Question-2

let x = {name : "Tahir"};
let y = [x]; // Inside an array it will be just Clone the object value
x.name = "kkk";
y.name = "Shoyeb";     // It will add another property in array of name
// console.log(y);
// console.log(x);

// Question-3

const value = {number : 10};

const multiply = (x = {...value}) => {
      console.log(x.number *= 2);
}

//  Until we didn't pass the object, it will just clone the object
// multiply();
// multiply();

// Here we are passing the original object so, it will be going to 
// change the original value of number
// multiply(value);
// multiply(value);
// console.log(value);

// Question-4

function changeAgeAndRef(person) {
      person.age = 33;
      person = {                    // Reassign will not change the value
            name : "Santosh",       // of original object
            age : 24,
      }
      return person;
}

const personObj1 = {
      name : "Tahir",
      age : 22,
};

const personObj2 = changeAgeAndRef(personObj1);

console.log(personObj1);
console.log(personObj2);