
// 1) Brute Approach

// function factorial(n) {

//       let ans = 1;
//       for( let i = 1; i <= n; i++) {
//             ans = ans * i;
//       }
//       return ans;
// }

// console.log(factorial(5));




// 2) Recursive (Parameterized way)

// function factorial(n, ans) {

//       if( n === 1) {
//             console.log(ans);
//             return;
//       }

//       factorial(n - 1, ans * n);
// }

// factorial(5, 1)


// Recursive (Functional way)

function factorial(n) {

      if(n === 1) return 1;

      return n * factorial(n - 1);
}

console.log(factorial(5));