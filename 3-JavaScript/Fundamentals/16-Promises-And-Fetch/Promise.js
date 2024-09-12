/*  ==========  Promises ========== 

    -It is an object representing the eventual completion or failure of an asynchronous operation.

    - Most of the time we consume promises, but in this document we will learn how to create promises first.
*/

/*  ========== Object  ========== 

    - An object is a collection of properties, And a property is an association between a name and a value.

    - A property's value can be a function, in which case the property is known as method.

    - For example, A cup has a color, design, weight, material it is made etc. The same way, javascript objects can have properties, which define their characterstics. 
*/

/* 1) First Approach

    - Storing the promise in a variable.

    - takes a callback(param1, param2).

    - resolve() is connected with then().

    - If we can't call resolve() inside the promise, until then, the promise is not consumed, but only created.
*/

// Creation of promise

// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   }, 2000);
// });

// // Consuption of promise using then(cb)

// promiseOne.then(function () {
//   console.log("Promise is consumed");
// });

// 2) Second Approach  -> without storing inside a variable

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task-2 is completed");
//     resolve();
//   }, 2000);
// }).then(function () {
//   console.log("Promise-2 is also fulfilled");
// });

// 3) Third Promise

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Ansync task-3 is completed");

//     /*
//       - resolve() can also return some value to then().

//       - let's say, the promise extracted something from database, wants to return that value, we can return through resolve(arguments). the anrgument value can be anything.
//     */

//     resolve({ name: "Tahir", email: "tahirtrk42@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (obj) {
//   console.log(obj);
// });

// 4) Fourth Promise

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;

//     if (!error) {
//       // If the promise is resolved, resolve() will connect to then().
//       resolve([12, 34, 55, 66]);
//     } else {
//       // Otherwise reject() will connect to catch()
//       reject("ERROR: Something went wrong");
//     }
//   }, 2000);
// });

// Chaining
// We can't store the below code inside a variable, which is not possible

// promiseFour
//   .then((obj) => {
//     console.log(obj);
//     // This return statement returns the value to Another then()
//     return obj[0];
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((str) => {
//     console.log(str);
//   })
//   .finally(() => {
//     // Every time this method will run either the promise is rjected or resolved.
//     console.log("Finally the promise is either Resolved or Rejected");
//   });

// 5) Promise Five

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ name: "JS Promise", type: "Async Await" });
//     } else {
//       reject("ERROR: Some error occured");
//     }
//   }, 2000);
// });

// 6) async - await -> Another approach of handling promises without using the then() & catch() method.

// async function consumePromise() {
//   // When a promise is resolved then it goes to try block,And when rejected goes to the catch block.

//   try {
//     // Here we can store it inside a variable due to async & await, And it will store resolve() method returned vlaue;
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromise();

// 7) Fetch data from the Database

// async function getAllUsers() {
//   try {
//     // Anything which will take time to do their task, before that we add await keyword.
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     // To convert to JSON, it will take time.
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

// 8) Fetch()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log("Data is fetched successfully or not" + error);
  });
