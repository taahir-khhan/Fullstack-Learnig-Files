let balance = 1233;

// Converted into string, so we can use any functionality of string here
console.log(balance.toString().length);

// How many number after decimal point is defined by this method. Range of argument is (0 - 100)
let otherBalance = 4758.65254353;
console.log(otherBalance.toFixed(3));

// Gives more prcise number according to the 'Precission' value.
// Takes the most significant digits from the starting, in some cases it also round up the values. Range of argument is (0 - 100).
const id = 123.4249;
console.log(id.toPrecision(3));

const hundreds = 100000;
console.log(hundreds.toLocaleString("en-IN"));
