
// Deleting object variables or properties

const user = {
  name : "Tahir",
  age : 22,
  isLearning : true,
};

console.log(user.isLearning);

// Delete is used to delete only the properties of object

delete user.isLearning;
console.log(user.isLearning);

// Example

const func = ( (a) => {
  delete a; // Here a is local variable, so it will delete nothing
  return a;
})(5);

console.log(func); // print 5;