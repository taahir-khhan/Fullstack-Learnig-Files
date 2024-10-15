


/* function x() {
      
      for(var i = 1; i<=5; i++) {
            setTimeout(function() {   // 
                  console.log(i);
            }, i*1000);
      }
      console.log("Changa ji Sab");
};

x(); */


/* function x() {
      
      for(let i = 1; i<=5; i++) {
            setTimeout(function() {   // 
                  console.log(i);
            }, i*1000);
      }
      console.log("Changa ji Sab");
};

x(); */


// Don't change the var naming 

function x() {      
      for(var i = 1; i<=5; i++) {
            function close(x) {
                  setTimeout(function() {   // Now the scope is different
                        console.log(x);
                  }, x*1000);
            }
            close(i);
      }
      console.log("Changa ji Sab");
};
x();



