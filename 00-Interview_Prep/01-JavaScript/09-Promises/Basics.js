/* ============ Synchronous vs Asynchronous JavaScript ============ 

  - Synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing.

  - Asynchronous is not the core feature of JavaScript, but it is provided by the browser APIs and Node.js. It allows JavaScript to execute other codes in asynchronous manner.

  - JavaScript is single-threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. This is why JavaScript is Synchronous.
*/

function doSomeWork(message) {
  // ----- The setTimeout does not return anything by using the return keyword, instead By default it returns a timer ID, which is useful in case of clearTimeout() -----
  setTimeout(() => {
    // ----- The return inside the callback is ignored, it does not affect the setTimeout function -----
    return "This is the message: " + message;
  }, 500);
}

const message = doSomeWork("Hello World");
console.log("Output ? :", message, "\n");

// ----- To print the message-----
function doSomeMoreWork(message, cb) {
  setTimeout(() => {
    cb(`This is the second message: ${message} \n`);
  }, 500);
}

const messageTwo = doSomeMoreWork("Hii Everyone", function (value) {
  console.log(value);
});

// ========== Callback Hell ==========
// The simple goal here is, the function should execute in this manner learnBasics -> learnHTML -> learnCSS etc.

function learnBasics(message, cb) {
  setTimeout(() => {
    cb(`Learn in web Developmet: ${message}`);
  }, 1000);
}

function learnHTML(message, cb) {
  setTimeout(() => {
    cb(`Learn in web Developmet: ${message}`);
  }, 1000);
}

function learnCSS(message, cb) {
  setTimeout(() => {
    cb(`Learn in web Developmet: ${message}`);
  }, 1000);
}

function learnJavaScript(message, cb) {
  setTimeout(() => {
    cb(`Learn in web Developmet: ${message}`);
  }, 1000);
}

// To achieve the above goal
learnBasics("Web Fundamentals", function (value) {
  console.log(value);
  learnHTML("HTML is the Backbobe", function (value) {
    console.log(value);
    learnCSS("CSS is the skin and beauty", function (value) {
      console.log(value);
      learnJavaScript("This is the logic part", function (value) {
        console.log(value);
      });
    });
  });
});

// The goal is achieved now, But the problem is the code not so much readable and unserstandable, To solve this problem we will use Promises.

// ========== Promises ==========
