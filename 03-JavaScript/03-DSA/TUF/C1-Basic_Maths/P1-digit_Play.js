
// Extraction of Digits - Prints Number in reverse order

function extractDigits(num) {

      while(num > 0) {
            console.log(num % 10)
            num = Math.floor(num / 10)
      }
};

let num = 567
extractDigits(num);