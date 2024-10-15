/* =========== Scope ===========

  - Certain Region Of Program & How it behaves in different variable declaration.
*/

let a = 100;
var b = 111;

{
  let a = 200;
  var b = 222;

  console.log("Inner a: ", a);
  console.log("Inner b: ", b, "\n");
}

console.log("Outerr a: ", a);
console.log("Outerr b: ", b, "\n");

// =========== Accessible Or Not ===========

function One() {
  let username = "Tahir";

  function Two() {
    let channel = "Chai Aur Code";
    // Here username is accessible, due to closure property of javascript
    console.log(`${username} learning from ${channel}`, "\n");
  }

  // We can't access inner function variable outside the function.
  // console.log(channel);

  Two();
}

One();

// Similar with block scope

if (true) {
  const name = "Chada";

  if (true) {
    const fathername = "Tahir";
    console.log("Mere Bete ka naam: ", name, "\n");
  }

  // We can't access block scoped variable outside it's scope.
  // console.log("Baap ka Naam bhul gaya bete: ", fathername);
}

// ========= Function Expression =========

// We can't call the function expression, before declaration.
// addTwo(7);

var addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(25));
