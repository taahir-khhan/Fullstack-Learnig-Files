
/* Brute Approach

      - We take the minimum of two number & (gcd = 1) Because 1 devides every number.

      - Then we start itrating from ( 2 - miniNum) for each (i) value if it devides the both (a & b), then we are storing the answer in (gcd).

      - At the end, it will store the GCD of two number
*/

// function GCD(a, b) {

//       let gcd = 1

//       for(let i = 2; i <= Math.min(a, b); i++) {
//             if( (a % i === 0) && (b % i === 0) ) {
//                   gcd = i;
//             }
//       }
//       return gcd;
// }


/* Better Approach

      - Instead of itrating from 2, start the iteration from (miniNum - 1).

      - If (i) devides both (a & b) then return the (i) because it is the GCD.

      - In this approach, it will take much more less iteration as compare to previous.
*/

// function GCD(a, b) {

//       for(let i = Math.min(a, b); i > 0; i--) {
//             if(a % i === 0 && b % i === 0) {
//                   return i;
//             }
//       }

//       // No common factor was found
//       return 1;
// }


/* Optimal Approach (Euclidean Algorithm)

      - GCD(a, b) = GCD(a % b, b) , a > b

      - Repeat the above steps until, one of them becomes zero & the non-zero number is the GCD.
*/

function GCD(a, b) {

      while(a > 0 && b > 0) {

            if(a > b) 
                  a = a % b;
            else 
                  b = b % a;
      } 

      if(a === 0) return b;
      return a;
}



let n1 = 12;
let n2 = 36;
console.log(GCD(n1, n2));