
/* First Approach 

      - Extract the digits. revNum = 0

      - After tha put the simple formula to reverse the number i.e
      revNum = (revNum * 10) + lastDigit
*/

// function reverseNum(num) {
//       let revNum = 0;
//       while(num > 0) {
//             let lastDigit = num % 10;
//             revNum = (revNum * 10) + lastDigit;
//             num = Math.floor(num / 10);
//       }
//       return revNum;
// }

/* Second Approach

      - Using string inbuilt functions
*/
function reverseNum(num) {
      return +num.toString().split("").reverse().join("")
}

let num = 1234;
console.log(reverseNum(num));