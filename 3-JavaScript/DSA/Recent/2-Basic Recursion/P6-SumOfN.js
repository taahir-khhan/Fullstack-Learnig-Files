
// 1) Brute Approach

// function sumOfN(n) {

//       let sum = 0;
//       for(let i = 1; i <= n; i++) {
//             sum += i;
//       }
//       return sum;
// }

// sumOfN(6)




// 2) Optimal Approach


// function sumOfN(n) {

//       return (n * (n + 1)) / 2;
// }

// sumOfN(5)




// 3) Recursive Approach (Parameterized way)


// function sumOfN(i, sum) {

//       if(i < 1) {
//             console.log(sum);
//             return;
//       }

//       sumOfN(i-1, sum + i);
// }

// sumOfN(3, 0)



// 4) Recursive Approach (Functional Appraoch)


function sumOfN(n) {

      if(n == 1)
            return 1;

      return n + sumOfN(n - 1);
} 

sumOfN(5);