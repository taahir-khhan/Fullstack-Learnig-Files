
// function calculateFreq(arr) {

//       let higestOccEle = -1;
//       let lowestOccEle = -1;
//       let maxi = 0, mini = 99;

//       for (const currEle of arr) {
            
//             let cnt = 0;
//             for (const ele of arr) {

//                   // Count occurance of the element fisrt
//                   if(currEle === ele) {
//                         cnt++;
//                   }

//                   // store the highest element if it is occured more than maxi
//                   if(cnt > maxi) {
//                         higestOccEle = currEle;
//                         maxi = cnt;
//                   }

//                   // store the lowest element if it is occured less than mini
//                   if(cnt < mini) {
//                         lowestOccEle = currEle;
//                         mini = cnt;
//                   }
                  
//             }
//       }

//       console.log(higestOccEle, lowestOccEle);
// }


function calculateFreq(arr) {

      const freqMap = new Map();

      for (const ele of arr) {

            if(freqMap.has(ele)) {
                  freqMap.set(ele, freqMap.get(ele) + 1);
            }
            else {
                  freqMap.set(ele, 1);
            }
      }

      let higestOccEle = -1;
      let lowestOccEle = -1;
      let maxi = 0, mini = 99;

      for (const [key, val] of freqMap) {

            if(val > maxi) {
                  higestOccEle = key;
                  maxi = val;
            }

            if(val < mini) {
                  lowestOccEle = key;
                  mini = val;
            }
      }

      console.log(higestOccEle, lowestOccEle);
}

const myNums = [10, 5, 15, 10, 10, 15];
calculateFreq(myNums)