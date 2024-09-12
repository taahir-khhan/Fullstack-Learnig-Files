
function armstrongNumber(num) {

      let sum = 0;
      let originalNum = num;

      while(num > 0) {
            let lastDigit = num % 10;
            sum = sum + (lastDigit * lastDigit * lastDigit);
            num = Math.floor(num / 10);
      }
      
      if(sum === originalNum) return true;
      return false;
};


let num = 371;
let ans = armstrongNumber(num);

console.log(`Is ${num} armstrong number ? : ${ans}`);