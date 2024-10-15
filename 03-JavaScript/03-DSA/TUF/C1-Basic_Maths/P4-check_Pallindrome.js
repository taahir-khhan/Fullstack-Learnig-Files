
function reverseNumber(num) {

      let revNum = 0;

      while(num > 0) {
            let lastDigit = num % 10;
            revNum = (revNum * 10) + lastDigit;
            num = Math.floor(num / 10);
      }
      return revNum;
};


function checkPallindrome(num) {

      let revNum = reverseNumber(num);

      if(revNum === num) return true;
      return false;
};


let num = 1221;
let ans = checkPallindrome(num);
console.log(`\n Is the ${num} is pallindrome ? : ${ans}`);