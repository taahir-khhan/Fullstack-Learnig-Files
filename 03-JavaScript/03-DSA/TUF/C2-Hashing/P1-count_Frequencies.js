
// function countFreq(arr, queries) {

//       let qrisLen = queries.length;
//       let arrLen = arr.length;

//       for(let i = 0; i<qrisLen; i++) {

//             let ele = queries[i];
//             let cnt = 0;
//             for(let j = 0; j<arrLen; j++) {

//                   if(ele === arr[j]) {
//                         cnt++;
//                   }
//             }
//             console.log(`${ele} appeared ${cnt} times`);
//       }
// } 


function countFreq(arr, queries) {
      
      const freqMap = new Map();

      for (const ele of arr) {
            
            if(freqMap.has(ele)) {
                  freqMap.set(ele, freqMap.get(ele) + 1);
            }
            else {
                  freqMap.set(ele, 1);
            }
      }
      
      for (const ele of queries) {
            console.log(ele, freqMap.get(ele));
      }
}


let numsArr = [2, 4, 3, 2, 1, 1, 2, 5];
let queries = [1, 2, 3, 10];

countFreq(numsArr, queries);