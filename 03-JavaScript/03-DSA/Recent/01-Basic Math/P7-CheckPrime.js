
// Brute Approach

// function checkPrime(n) {

//       let cnt = 0;

//       for( let i = 1; i <= n; i++) {
//             if( n % i === 0) cnt++;
//       }

//       if(cnt > 2) 
//       console.log("Not a Prime Number");
//       else
//       console.log("A Prime Number");
// }


// Brute Approach

function checkPrime(n) {

      let cnt = 0;

      for( let i = 1; i*i <= n; i++) {
            if(n % i === 0) {
                  cnt++;
                  if(n / i !== i) cnt++;
            }
      }

      if(cnt > 2) 
      console.log("Not a Prime Number");
      else
      console.log("A Prime Number");
}

let n = 11;
checkPrime(n)