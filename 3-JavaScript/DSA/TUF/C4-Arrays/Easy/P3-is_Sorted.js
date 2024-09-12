
/* function is_Sorted(arr) {

      const n = arr.length;

      // Edge Case
      if(n === 0 || n === 1)  
      return true;

      for(let i = 0; i<n; i++) {

            let currEle = arr[i];
            for(let j = i + 1; j<n; j++) {

                  // If current element is greater than any future element, that means the array is not sorted
                  if(currEle > arr[j])
                  return false;
            }
      }

      // Otherwise, Array is sorted
      return true;
}  */


function is_Sorted(arr) {

      const n = arr.length;

      // Edge Case
      if(n === 0 || n === 1)  return true;

      // Simple observation, At any point if (previousEle > nextEle) then array is not sorted
      for(let i = 1; i<n; i++) {

            if(arr[i - 1] > arr[i])
            return false;
      }

      // Otherwise, Array is sorted
      return true;  
}

const numsArr = [1, 4, 7, 11, 2, 29, 32];

let ans = is_Sorted(numsArr);
console.log(`Is Array Sorted ? : ${ans}`);