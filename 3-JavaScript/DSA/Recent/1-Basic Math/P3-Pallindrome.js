
/* Approach

      - First reverse the number

      - Then Compare if ( reverseNum === OriginalNum) then it is a Pallindrome number
*/

function reverseNum(num) {
      return +num.toString().split("").reverse().join("")
}

function checkPallindrome(num) {
      if(reverseNum(num) === num) return true;
      return false
}

let num = 1331;
console.log(checkPallindrome(num));