
// Lexical means Hierarchy/Order

let greet = "Hello";

function task() {
      const v = 44;
      var x = 55;
      function smTask() {
            var v = 11;
            console.log(v);
            console.log(greet);
      }
      smTask(); 
      console.log(v);
};
task();