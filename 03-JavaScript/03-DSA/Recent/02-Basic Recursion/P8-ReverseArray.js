
// 1) Brute Approach (Using Extra Space)

// function reverseArray(arr) {

//       let reversedArr = [];

//       for(let i = arr.length - 1; i >= 0; i--) {
//             reversedArr.push(arr[i]);
//       }

//       console.log(reversedArr);
// }

// const nums = [1, 2, 3, 4, 5]
// reverseArray(nums)



// 2) Better Approach (Two Pointer)

// function reverseArray(arr) {

//       let left = 0;
//       let right = arr.length-1;

//       while(left < right) {

//             // Swapping of two number using extra variable

//             let temp = arr[left];
//             arr[left] = arr[right];
//             arr[right] = temp;

//             // Or Using Destructuring Method
//             // [arr[left], arr[right]] = [arr[right], arr[left]];

//             left++, right--;
//       }

//       return arr;
// }

// const nums = [1, 2, 3, 4, 5]
// console.log(reverseArray(nums));


// 3) Recursive Approach 

function reverseArray(arr, left, right) {

      // Base case
      if(left >= right) 
      return;

      // Destructuring swap
      [arr[left], arr[right]] = [arr[right], arr[left]]

      reverseArray(arr, left + 1, right - 1)
}

const nums = [1, 2, 3, 4, 5]
reverseArray(nums, 0, nums.length - 1)
console.log(nums);