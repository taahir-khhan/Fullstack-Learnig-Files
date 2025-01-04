

/* function task() {
      const v = 44;
      function smTask() {
           console.log(v);
      }
      return smTask;
}; */

function task() {
      const v = 44;
      return function() {           // Both function behaves same
           console.log(v);
      }
};

let x = task();

x();               // Best example of closures