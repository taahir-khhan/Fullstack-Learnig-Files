
function task() {
      let v = 44;
      function smTask() {         
           console.log(v);   // V is referencing to memomry not value
      }
      v = 88;
      return smTask;
};

let x = task();

x();             // When we call this now the V value now changed i.e 88