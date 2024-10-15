
/*  function find_Second_Largest(arr) {

      let n = arr.length;

      // Edge Case - Size is 0 or 1
      if(n === 0 || n === 1) return -1;

      // Sort the array 1st
      arr.sort( (a, b) => a - b);

      // Then Travesre backward & find the answer
      let largest = arr[n - 1];
      for(let i = n-2; i>=0; i--) {
            if(arr[i] !== largest) {
                  let secondLargest = arr[i];
                  return secondLargest;
            }
      }

      return -1;
};   */


/* function find_Second_Largest(arr) {

      let n = arr.length;

      // Edge Case - Size is 0 or 1
      if(n === 0 || n === 1) return -1;

      // Find the largest Element first
      let largest = arr[0];
      for(let i = 1; i<n; i++) {
            if(arr[i] > largest) {
                  largest = arr[i];
            }
      }

      // Then find the second largest element
      let secondLargest = -1;
      for(let i= 0; i<n; i++) {
            if(arr[i] != largest && arr[i] > secondLargest) {
                  secondLargest = arr[i];
            }
      }

      return secondLargest;
};  */


function find_Second_Largest(arr) {

      let n = arr.length;

      // Edge Case - Size is 0 or 1
      if(n === 0 || n === 1) return -1;

      // In a single traversal, we are finding Largest and second Largest
      let largest = -1;
      let secondLargest = -1;

      for(let i = 0; i<n; i++) {
            if(arr[i] > largest) {
                  secondLargest = largest;
                  largest = arr[i];
            }
            else if(arr[i] != largest && arr[i] > secondLargest) {
                  secondLargest = arr[i];
            }
      }

      return secondLargest;
};


let numsArr = [2, 6, 7, 9, 10, 1, 3, 22, 54, 23, 12, 16, 19];

const ans = find_Second_Largest(numsArr);
console.log(`\n Second Largest Element in array is: ${ans}`);