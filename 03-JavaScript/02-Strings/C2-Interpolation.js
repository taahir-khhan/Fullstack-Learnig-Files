const fname = "Tahir";
const lname = "Khan";

// ======== Concatenate (String interpolation) ========

// old way of doing concatenate, And if we have multiple string it reduces the code readability.
console.log(fname + " " + lname, "\n");

// Bactics symbol,And this way of writing and embeding string and variables are string interpolation (Currently used format).
console.log(
  `Fisrt name is ${fname.toLocaleUpperCase()} & Last name is ${lname}`
);
