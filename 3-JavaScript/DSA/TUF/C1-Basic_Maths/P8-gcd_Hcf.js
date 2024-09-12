
/* function gcdHcf(n1, n2) {

      let mini = Math.min(n1, n2);
      let gcd = -1;

      for(let i = 1; i<=mini; i++) {
            
            if((n1 % i == 0) && (n2 % i == 0)) {
                  gcd = i;
            }
      }
      return gcd;
};  */


function gcdHcf(n1, n2) {

      // Euclidean Algorithm

      while(n1 > 0 && n2 > 0 ) {

            if(n1 > n2)  
            n1 = n1 % n2;
            else 
            n2 = n2 % n1;
      }

      if(n1 === 0) return n2;
      return n1;
};


let num1 = 9;
let num2 = 12;

const ans = gcdHcf(num1, num2);
console.log(`\n GCD/HCF of ${num1} & ${num2} is : ${ans}`);