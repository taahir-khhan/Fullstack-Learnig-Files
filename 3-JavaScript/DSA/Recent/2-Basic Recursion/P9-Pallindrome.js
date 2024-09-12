
// 1) Brute Approach

// function checkPallindrome(str) {

//       let original = str;

//       if(original === str.split('').reverse().join('')) {
//             console.log("It is a Pallindrome");
//       } 
//       else {
//             console.log("Not a Pallindrome");
//       }
      
// }

// const name = "babu";
// checkPallindrome(name);


// 2) Better Approach (Two Pointer)

// function checkPallindrome(str) {

//       let left = 0;
//       let right = str.length - 1;

//       while(left < right) {

//             if(str[left] !== str[right]) {
//                   console.log("Not a Pallindrome");
//                   return;
//             }
//             left++, right--;
//       }

//       console.log("A Pallindrome");
//       return;
// }

// const name = "babu";
// checkPallindrome(name);


// 3) Recursive Approach

// function checkPallindrome(str, left, right) {

//       if(left > right) {
//             console.log("A Pallindrome");
//             return;
//       }

//       if(str[left] !== str[right]) {
//             console.log("Not a Pallindrome");
//             return;
//       }

//       checkPallindrome(str, left + 1, right - 1);
      
// }

// const name = "tut";
// checkPallindrome(name, 0, name.length - 1);


// 3) Recursive Approach (Better Version)

function checkPallindrome(str, i) {

      if(i >= (str.length / 2) ) {
            console.log("A Pallindrome");
            return;
      }

      if(str[i] !== str[str.length - i - 1]) {
            console.log("Not a Pallindrome");
            return;
      }

      checkPallindrome(str, i + 1);
      
}

const name = "tutu";
checkPallindrome(name, 0);