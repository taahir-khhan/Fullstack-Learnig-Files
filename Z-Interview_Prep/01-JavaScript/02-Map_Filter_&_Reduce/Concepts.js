/*  ========= Map =========

  -It is an array method, which itarte over an array and return a new array based on the condition defined. And doesn't modify the original array.

  - It can return any value, including different datatypes and have access to each element, index and the whole array.
*/

const nums = [1, 2, 3, 4, 5];

const multiplyThree = nums.map((num, idx, arr) => {
  return num * 3;
});

// console.log(multiplyThree); // [ 3, 6, 9, 12, 15 ]

// Pollyfil
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const multiplyTwo = nums.myMap((num, idx, arr) => {
  return num * 2;
});

// console.log(multiplyTwo);

/*  ========= Filter =========

  - It is also an array method, which itarte over an array and Filter the array based on the condition defined.

  - It will also return a new array and doesn't have any effect in original array.

  - It also have the access to ele, idx and array.
*/

const nums2 = [10, 20, 30, 40, 50];

const greaterThanThirty = nums2.filter((num, idx, arr) => {
  return num > 30;
});

// console.log(greaterThanThirty); // [ 40, 50 ]

const book = [
  { title: "book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// Filter the book according to genre of fiction
let ans1 = book.filter((item) => item.genre === "Fiction");
// console.log(ans1, "\n");

// Pollyfil
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let lessThanThirty = nums2.myFilter((num) => {
  return num < 30;
});

// console.log(lessThanThirty);

/*  ========= Reduce =========

    - It accumulates all the elements from the array and reduced it to a single value.

    - Initial value -> If not provided, then the first element of the array is used as the initial value.
*/

const nums3 = [100, 200, 300, 400, 500];

const sum = nums3.reduce((acc, num, idx, arr) => {
  return acc + num;
}, 100); // Here we provided the initial value.

// console.log(sum); // 1600

//Polyfill
Array.prototype.myReduce = function (cb, initialVal) {
  let accumulator = initialVal !== undefined ? initialVal : this[0];
  const startIndex = initialVal !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};

let anotherSum = nums3.myReduce((acc, num) => {
  return acc + num;
});

console.log(anotherSum);
