
function reverseNumber(num) {

      let revNum = 0
      while(num > 0) {
            let lastDigit = num % 10
            revNum = (revNum * 10) + lastDigit
            num = Math.floor(num / 10)
      }
      return revNum
};

let num = 1234
const ans = reverseNumber(num)
console.log(`\n Reverse number is: ${ans}`);