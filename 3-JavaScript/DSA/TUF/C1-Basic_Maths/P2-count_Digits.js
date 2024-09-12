
/* function countDigits(num) {
      let cnt = 0;
      while(num > 0) {
            cnt++;
            num = Math.floor(num / 10);
      }
      return cnt;
};  */


/* function countDigits(num) {
      let str = num.toString();
      return str.lenght;
}; */


function countDigits(num) {
      let digits = Math.ceil(Math.log10(num));
      return digits;
};


let num = 54321116;
let ans = countDigits(num);
console.log(`\n No. of digits are: ${ans}`);