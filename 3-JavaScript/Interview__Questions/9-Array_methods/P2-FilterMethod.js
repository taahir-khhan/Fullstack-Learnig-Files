
const nums = [1, 2, 3, 4];

const greaterThanTwo = nums.filter( (ele) => ele > 2)
console.log(greaterThanTwo);


const nums2 = [1, 2, 3, 4];

const lessThanTwo = nums2.filter( (ele) => ele < 2)
console.log(lessThanTwo);


// Polyfill of filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) temp.push(this[i]);
  }
  return temp;
};