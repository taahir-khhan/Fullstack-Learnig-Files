
/* function remove_Duplicates(arr) {

      // A set is only contains unique elements
      const hashSet = new Set(arr);

      // Converting set elements into array
      const uniqueArr = Array.from(hashSet);

      for(let i = 0; i<uniqueArr.length; i++) {

            // Placing unique elements from the starting index in original array
            arr[i] = uniqueArr[i];
      }

      // Number of unique element in the array
      return uniqueArr.length;

}; */


function remove_Duplicates(arr) {

      // Two Pointer
      let i = 0, j = 1;
      
      while(j < arr.length) {

            if(arr[j] != arr[i]) {
                  i++;
                  arr[i] = arr[j];
            }
            j++;
      }

      // Number of unique element in the array
      return i + 1;
};



const numsArr = [1, 2, 2, 2, 3, 3, 4, 4, 5];

const ans = remove_Duplicates(numsArr);

console.log(`\n After romoving duplicates: ${numsArr} \n And no. of unique element is: ${ans}`);

