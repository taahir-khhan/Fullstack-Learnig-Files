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
