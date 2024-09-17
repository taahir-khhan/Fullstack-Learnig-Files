/*  ========= Filter =========

  - It is also an array method, which itarte over an array and Filter the array based on the condition defined.

  - It will return a new array and doesn't have any effect in original array.

  - It also have the access to ele, idx and array.
*/

// Ex-1

const numsArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const values = numsArr.filter((num) => num > 10);
console.log(values, "\n");

// Other ways of doing the above task
const newArr = [];
numsArr.filter((num) => {
  if (num < 10) {
    newArr.push(num);
  }
});
console.log(newArr, "\n");

// Ex-2

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

// Give me only fiction book
let ans1 = book.filter((item) => item.genre === "Fiction");
console.log(ans1, "\n");

// fiction book edition 2010
let ans2 = book.filter(
  (item) => item.genre === "Fiction" && item.edition === 2010
);
console.log(ans2, "\n");

const myArr2 = [1, 2, 4, 6, 7];
let ans3 = myArr2.filter((num) => {
  return num % 2 === 0;
});
console.log(ans3);
