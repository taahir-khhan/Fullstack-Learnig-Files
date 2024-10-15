
// Select minimum & Swap

function sort(arr) {

      let n = arr.length
      for(let i = 0; i<n; i++) {

            // Assume that the current index element is the minimum
            let minIdx = i

            // find the index of the minimum element in the unsorted part
            for(let j = i + 1; j<n; j++) {
                  if(arr[j] < arr[minIdx]) {
                        minIdx = j
                  }
            }

            // Swap if any minimum element is found
            if(minIdx !== i) {
                  const temp = arr[i]
                  arr[i] = arr[minIdx]
                  arr[minIdx] = temp
            }  
      }
}

const myNumsArr = [13, 46, 24, 7, 11, 33]
sort(myNumsArr);
console.log(myNumsArr);