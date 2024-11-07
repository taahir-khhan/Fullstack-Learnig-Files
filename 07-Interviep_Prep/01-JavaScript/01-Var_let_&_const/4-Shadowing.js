// ======== Shadowing ========
function test1() {
  var a = 2;
  var b = 4;
  if (true) {
    let a = 11;
    const b = 22;
    console.log(a, b);
  }
  console.log(a, b);
}
// test1();

// ======== Illegal shadowing ========
function test2() {
  let x = 6;
  const y = 8;
  if (true) {
    // var x = 11;
    // var y = 22;
    console.log(x, y); // not possible
  }
  console.log(x, y);
}
// test2();

function test3() {
  var x = 10;
  if (true) {
    var x = 20; // re-initialized
    console.log(x);
  }
  console.log(x); // not consistent
}
// test3();

// ======== Valid shadowing ========

function test4() {
  let y = 10;
  const z = 20;
  if (true) {
    let y = 30; // different scope, different variable
    const z = 40;
    console.log(y, z);
  }
  console.log(y, z); // remain consistent
}
// test4();
