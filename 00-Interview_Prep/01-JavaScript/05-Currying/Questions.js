// Ques1 - sum(10)(20)(30)

function currySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(currySum(10)(20)(30));

/* Ques2 - evaluate("sum")(4)(2) => 6
           evaluate("mul")(4)(2) => 8
           evaluate("devide")(4)(2) => 2
           evaluate("substract")(4)(2) => 2
*/

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "subs") return a - b;
      else if (operation === "mul") return a * b;
      else if (operation === "devide") return a / b;
      else return "Invalid operation";
    };
  };
}

// This is the actual advantage of currying i.e reusability
const sum = evaluate("sum");
// console.log(sum(10)(30));
// console.log(sum(10)(55));

const devide = evaluate("devide");
// console.log(devide(12)(2));
// console.log(devide(24)(2));

// Ques3 - Infinite Currying

function infiniteSum(a) {
  return function (b) {
    if (b) return infiniteSum(a + b);
    return a;
  };
}
// console.log(infiniteSum(10)(10)(20)());

// Ques4 - Partial application - This is not the currying

function partialApp(a) {
  return function (b, c) {
    return a + b + c;
  };
}

// console.log(partialApp(10)(20, 30));

// Ques5 - Manipulating DOM
function modifyHeader(id) {
  return function (content) {
    document.querySelector(`#${id}`).textContent = content;
  };
}

const headerContent = modifyHeader("heading");
headerContent("Hello every one this is 69 modification");
headerContent("lots of practice questions");

// Ques6 - curry() -> curry will convert this fun(a, b, c) into this fun(a)(b)(c)
