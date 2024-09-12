
/* function checkPrime(num) {                  // T.C = O(N)

      let cnt = 0;
      for(let i = 1; i<=num; i++) {
            if(num % i == 0){
                  cnt++;
            }
      }

      if(cnt == 2) {
            console.log("Prime Number");
      }
      else {
            console.log("Not a Prime Number");
      }
};  */


function checkPrime(num) {                    // T.C = O(sqrt(N))

      let cnt = 0;
      for(let i = 1; i*i<=num; i++) {

            if(num % i == 0) {
                  cnt++;
                  if(num/i != i) cnt++;
            }
      }

      if(cnt == 2) {
            console.log("Prime Number");
      }
      else {
            console.log("Not a Prime Number");
      }
};

let num = 30;
checkPrime(num);