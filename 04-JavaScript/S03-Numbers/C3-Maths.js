// ======== BASICS ========

console.log(Math, "\n");

console.log("Absolute value: ", Math.abs(-464.544), "\n");

console.log("Round the value: ");
console.log(Math.round(4.3));
console.log(Math.round(4.7), "\n");

console.log("Ciel value: ");
console.log(Math.ceil(4.2));
console.log(Math.ceil(4.9), "\n");

console.log("Floor value: ");
console.log(Math.floor(7.2));
console.log(Math.floor(7.9), "\n");

console.log("Minimum num: ", Math.min(4.2, 78, 3, 1), "\n");

console.log("Maximum num: ", Math.max(4.2, 78, 3, 1), "\n");

console.log("Square root of a num: ", Math.sqrt(144), "\n");

// ======== ADVANCE ========

// Generate value i.e (>= 0) & (< 1)
console.log("Random number: ", Math.random(), "\n");

console.log(
  "Generate a random number between 0 - 10: ",
  Math.floor(Math.random() * 10),
  "\n"
);

// Generate a random number between two values, 1 for avoiding zero case
const min = 1;
const max = 6;

console.log(
  "Generate a random number between 1 - 6: ",
  Math.floor(Math.random() * (max - min + 1) + min)
);

const biggestNum = Number.MAX_VALUE;
console.log(biggestNum);

const smallestNum = Number.MIN_VALUE;
console.log(smallestNum);

const infiniteNum = Number.POSITIVE_INFINITY;
console.log(infiniteNum);

const negInfiniteNum = Number.NEGATIVE_INFINITY;
console.log(negInfiniteNum);

const notANum = Number.NaN;
console.log(notANum);
