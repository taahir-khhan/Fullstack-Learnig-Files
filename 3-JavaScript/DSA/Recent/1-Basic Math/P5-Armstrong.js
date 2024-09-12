
/* Optimla Approach

      - 153 = 1^3 + 5^3 + 3^3 , then it is a Armstrong number.
*/

function isArmstrong(num) {

      let k = String(num).length;
      let sum = 0;
      let n = num;
      
      // Extract digits
      while(n > 0) {
            let lD = n % 10;
            sum += Math.pow(lD, k);
            n = Math.floor(n / 10);
      }

      console.log(sum, num);
      return sum === num;
}

let num = 153;
console.log(isArmstrong(num));
