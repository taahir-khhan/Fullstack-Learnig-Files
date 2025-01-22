/* ============ Synchronous vs Asynchronous JavaScript ============ 

      - Synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing.

      - Asynchronous is not the core feature of JavaScript, but it is provided by the browser APIs and Node.js. It allows JavaScript to execute other code while waiting for asynchronous code to finish executing.

      - JavaScript is single-threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. This is why JavaScript is asynchronous.
*/

console.log("First");

function doSomeWork(message) {
  setTimeout(() => {
    return "This is the message: " + message;
  }, 500);
}

const message = doSomeWork("Hello World");
console.log(message); // What will this output?

console.log("Last \n");

// Here when message is logged, it will be undefined because the function doSomeWork is asynchronous and the message is returned after 1 second. So, the message is logged before the message is returned.

// To fix this

console.log("Third");

function doSomeMoreWork(message, cb) {
  setTimeout(() => {
    cb(`This is the second message: ${message} \n`);
  }, 500);
}

const messageTwo = doSomeMoreWork("Hii Everyone", function (value) {
  console.log(value);
});

console.log("Fourth");

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
