
// Take an element & place it on it's correct position

function sort(arr) {
      let n = arr.length;

      for(let i = 1; i<n; i++) {

            let j = i

            // Take current index element and compare with it's previous, then place in it's correct position
            while(j > 0 && arr[j-1] > arr[j]) {
                  let temp = arr[j-1]
                  arr[j-1] = arr[j]
                  arr[j] = temp
                  j--
            }
      }
}

const myNumsArr = [64, 34, 25, 12, 22, 11, 90]
sort(myNumsArr);
console.log(myNumsArr);