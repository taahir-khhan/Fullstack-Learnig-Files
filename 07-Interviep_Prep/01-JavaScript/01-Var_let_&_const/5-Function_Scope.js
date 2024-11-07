// Here the execution context is different

var x = 10;

function check() {
  var x = 22;
  console.log(x);
}

check();
console.log(x);
