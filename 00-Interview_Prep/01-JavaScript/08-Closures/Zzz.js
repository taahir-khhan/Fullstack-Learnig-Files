
function outer() {
      let a = "Hello";
      function inner() {
            console.log(a);
      }
      return inner;
}

(outer())();  // Imidiately calling the function after it returning the function


// Function Parameter also closed over in closure

function outer2(name) {
      let greet = "Hello";
      function inner() {
            console.log(greet, name);
      }
      return inner;
}

var func = outer2("Jena");
func();


// Wrap it inside another function


function outest() {
      const c = 77;
      function outer2(name) {
            let greet = "Hello";
            function inner() {
                  console.log(greet, name, c);
            }
            return inner;
      }
      return outer2;
}
const c = 88;        // Conflicting name

outest()("Chada")();


// Data Privacy using closure

function counter() {
      let count = 0;
      function startCounting() {
            count++;
            console.log(count);
      };
      return startCounting;
}

const counter1 = counter();          // Normal execution of codes
counter1(); 
counter1();

const counter2 = counter();    // Here it will start fresh doesn't have any link with previous counter, Because it will make another new clone of counter() function
counter2();
counter2();
counter2();

