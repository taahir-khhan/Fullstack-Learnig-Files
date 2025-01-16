// Question1 - What is the logged value ?

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count, "\n");
})();

// Question2 - Write a function that would allow to do this

function createBase(x) {
  return (y) => {
    return x + y;
  };
}

var AddRandomValueWithSix = createBase(6);
console.log(AddRandomValueWithSix(10));
console.log(AddRandomValueWithSix(21), "\n");

/* Question3 - Time Optimization

  - Without closures, every time we call find(argument), the loop executes and populates the array from scratch, which is computationally expensive.
  
  - With closures, the loop runs only once, creating and storing the array in memory. Subsequent calls of returned function(closure) reuse this precomputed array, making the process significantly faster.
  
  - Since the loop's execution is static (runs a fixed number of times and generates the same result), using closures is the optimal choice for performance and efficiency in this scenario.
*/

function find() {
  let nums = [];
  for (let i = 0; i < 1000000; i++) {
    nums[i] = i * i;
  }

  return (idx) => {
    console.log(`Square of ${idx} is: ${nums[idx]}`);
  };
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");

console.time("12");
closure(12);
console.timeEnd("12");
console.log("\n");

// Question4 - Block Scope & SetTimeout

// 1st Version - What is the output ?
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// 2nd Version - What is the output ?
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// 3rd Version
// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }

//   inner(i);
// }

// Question5 - How to use closure to create a private variable

function privateVariable() {
  var _counter = 0;

  function add(num) {
    return (_counter += num);
  }

  function retrive() {
    console.log(`Private counter value = ${_counter}`);
  }

  return {
    add,
    retrive,
  };
}

const value = privateVariable();
// value.add(10);
// value.add(5);
// value.retrive();

// Question6 - Module pattern - Learn more about this

const Module = (function () {
  function privateMethod() {
    console.log(
      "This is the private method which is not accessible to outside"
    );
  }

  return {
    publicMethod: () => {
      console.log("This is accessible outside of this Module");
    },
  };
})();

// Module.publicMethod();

// Question7 - Call a function only once

let check;
function runOnce() {
  let count = 0;

  return () => {
    if (count > 0) {
      console.log("Already learned today");
    } else {
      check = "Are you studying daily ?";
      console.log(`${check} Yes i am`);
      count++;
    }
  };
}

let once = runOnce();
// once();
// once();
// once();

// More generice code - Understand this properly

function onceRun(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}

const hello = onceRun((a, b) => console.log("hello", a, b));

// hello(1, 11);
// hello();
// hello();
// hello();

// Quse8 - Memoized function

function memoizedFun(fun, context) {
  const res = {};

  return function (...args) {
    var argsCache = JSON.stringify(...args);
    if (!res[argsCache]) {
      res[argsCache] = fun.call(context || this, ...args);
    }

    return res[argsCache];
  };
}

function clumsyProduct(num1, num2) {
  for (let i = 0; i <= 1000000; i++) {}
  return num1 * num2;
}

const memoizeClumsyProduct = memoizedFun(clumsyProduct);

// console.time("First call");
// console.log(memoizeClumsyProduct(10, 11));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(memoizeClumsyProduct(10, 12));
// console.timeEnd("Second call");

// Question9 - Difference between closure and scope
