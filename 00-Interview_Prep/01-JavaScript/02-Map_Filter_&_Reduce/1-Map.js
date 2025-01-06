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

console.log(multiplyTwo);
