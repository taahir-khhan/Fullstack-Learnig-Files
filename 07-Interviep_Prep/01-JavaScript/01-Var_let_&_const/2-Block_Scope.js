// 1) var type of variables can be accessed out side the scope, because var stored/Attached in global scope, which behaves like a global variabale which is available to everyone.
{
  var x = 30;
  // console.log(x);
}

x = 100;
// console.log(x);

function greet() {
  var myName = "Tahir";
  console.log(`Hello ${myName}`);
}

// greet();
// console.log(myName);

// 2)let and const can't be accessed out side the block scope. Because it is non-existent outside the block.
{
  let y = 20;
  const z = 50;
  // console.log(y, z);
}
console.log(y, z);
