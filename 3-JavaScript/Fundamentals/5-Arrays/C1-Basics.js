
// ++++++++++++++ DECLARATION ++++++++++++++++

const myArr = [12, 16, true, "khan"];
const myArr2 = new Array(1, 3, 5, 7);

// console.log(myArr); 
// console.log(myArr2); 
// console.log(myArr[2]); 
// console.log(myArr2[2]); 





// +++++++++++++++ METHODS +++++++++++++++


const numArr = [1, 3, 5, 7, 9, 11, 3];
console.log("Original Array: ", numArr);



// 1) Push & Pop Operation

// numArr.push("Tahir");
// numArr.push(false);
// console.log(numArr);

// numArr.pop();
// console.log(numArr);  



// 2) Shift & Unshift Opeartion   -> This method isn't a good practice, Beacuse it will shift & Unshift all the value before pushing an element. Imagine if the array contains millions of elements.

// numArr.unshift("Pushes at start")
// console.log(numArr);    

// numArr.shift();
// console.log(numArr);  



// 3) Includes - Checks whether an element is present or not & Return Boolean vlaue.

// console.log(numArr.includes(7, 2));      // (search ele, fromIdx)
// console.log(numArr.includes(11));        // (search ele)




// 4) IndexOf - If present, returns index of the element, otherwise -1 & if the element present multiple times 1st Occurance

// console.log(numArr.indexOf(9, 2));          // (Search ele, fromIdx)



// 5) Join - will convert the array into string

// const store = numArr.join();
// console.log(store);                



// 6) Slice & Splice

// (startIdx, EndIdx) -> Exclude ending index Element  -> Doesn't have any impact in Original Array

// console.log(numArr.slice(2, -3));
// console.log(numArr.slice(2));
// console.log(numArr.slice(2, 4));
// console.log(numArr.slice());


// (startIdx, deleteCount)  -> Have Impact in Original Array

// console.log(numArr.splice(2, 3));

// numArr.splice(1, 0, "Lul")              // (start, delCount, insertItem at Index 1)
// console.log(numArr);