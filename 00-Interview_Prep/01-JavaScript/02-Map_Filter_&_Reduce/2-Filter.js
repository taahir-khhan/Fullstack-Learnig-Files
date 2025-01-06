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
