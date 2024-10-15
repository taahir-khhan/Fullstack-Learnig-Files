
// Push the max element to the last by adjacent swap

function sort(arr) {
      let n = arr.length;

      // Outer loop will decrease the range
      for(let i = n - 1; i>=0; i--) {

            //Optimization
            let swapRound = 0;

            for(let j = 0; j<=i-1; j++) {
                  // Swap if the element found is greater than the next element
                  if(arr[j] > arr[j+1]) {
                        const temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                        swapRound = 1;
                  }
            }
            
            // If there is no swapping happend that means all of them are in sorted order
            if(swapRound === 0) break;
      }
}

const myNumsArr = [64, 34, 25, 12, 22, 11, 90];
sort(myNumsArr);
console.log(myNumsArr);