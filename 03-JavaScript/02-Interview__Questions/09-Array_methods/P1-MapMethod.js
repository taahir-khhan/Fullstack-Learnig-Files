
const nums = [1, 2, 3, 4];
const multiplyFour = nums.map((ele) =>  ele * 4 )
console.log(multiplyFour);


const nums2 = [1, 2, 3, 4];
const addFive = nums2.map((ele) => ele + 5)
console.log(addFive);


// Polyfill of Map

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};