
/* function printDivisors(num) {                  // T.C = O(N)

      console.log(`All divisors of ${num} are: `);
      
      for(let i = 1; i<=num; i++) {
            if(num % i == 0) {
                  console.log(i);
            }
      }
}; */


function printDivisors(num) {                    // T.C = O(sqrt(N))

      console.log(`\n All divisors of ${num} are: `);

      for(let i = 1; i*i<=num; i++) {
            if(num % i == 0) {
                  console.log(i);
                  if(num/i != i) {
                        console.log(num/i);
                  }
            }
      }
};

let num = 42
printDivisors(num);