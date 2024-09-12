
/* Brute Approach -> (Extraction of digits) 

      - N % 10 = lastdigit of the number
      Ex:- 1234 % 10 = 4

      - Then we devides the number by 10 to remove the last digit
      Ex:- 1234 / 10 = 123.n = take the floor value i.e 123

      - Until the number becomes zero we will count all the digits in the number.
*/

// function countDigits(num) {
//   let cnt = 0;
//   while (num > 0) {
//     cnt++;
//     num = Math.floor(num / 10);
//   }
//   return cnt;
// }  


// Optimal Approach

function countDigits(num) {
      return num.toString().length;
}  

let num = 36537353;
console.log(countDigits(num));