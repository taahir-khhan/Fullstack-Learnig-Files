
// Brute Approach

// function printAllDivisors(n) {

//       for (let i = 1; i <= n; i++) {
//             if( n % i === 0) 
//             console.log(i);
//       }
// }


// Optimal Approach

function printAllDivisors(n) {

      for( let i = 1; i*i <= n; i++) {
            if( n % i === 0) {
                  console.log(i);
                  if(n / i !== i) {
                        console.log(n / i);
                  }
            }
      }
}

let num = 36;
printAllDivisors(num)