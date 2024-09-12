

/* function find_Largest(arr) {

      let n = arr.length;

      // Edge case - while array size 0 or 1
      if(n === 0) return -1;
      if(n === 1) return arr[0];
      
      // Sort the array
      arr.sort( (a, b) => (a - b));

      // After sorting last index element is the largest
      return arr[n - 1];

}; */


function find_Largest(arr) {

      let n = arr.length;

      // Edge case - while array size 0 or 1
      if(n === 0) return -1;
      if(n === 1) return arr[0];

      /* - Traverse in array 
         - compare current array Element with current largest element
         - if we find greater than largest, we are updating largest
      */  
      let largest = arr[0];
      for(let i = 1; i<n; i++) {
            if(arr[i] > largest) {
                  largest = arr[i];
            }
      }

      return largest;
};


let numsArr = [2, 6, 7, 9, 10, 1, 3, 22, 54, 23, 12, 16, 19];

const ans = find_Largest(numsArr);
console.log(`\n Largest Element in array is: ${ans}`);