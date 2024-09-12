
const nums = [1, 2, 3, 4];

// Accumulate all the array elements into single value & along with initial value

const sum = nums.reduce((acc, ele) => (acc + ele), 0)
console.log(sum);


// Polyfill of filter

Array.prototype.myReduce = function (cb, initialValue) {
    var acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
};


const nums2 = [5, 10, 15, 20];
const lessThanTwo = nums2.myReduce((acc, curr, i, arr) => {
  return acc + curr;
});
console.log(lessThanTwo);