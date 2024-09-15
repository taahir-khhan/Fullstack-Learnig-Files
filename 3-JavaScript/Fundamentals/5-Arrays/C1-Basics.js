// ========== DECLARATION ==========

const myArr = [12, 16, true, "khan"];
const myArr2 = new Array(1, 3, 5, 7);

console.log("\n", myArr);
console.log(myArr2);
console.log(myArr[2]);
console.log(myArr2[2], "\n");

// ========== METHODS ==========

const numArr = [1, 3, 5, 7, 9, 11, 3];
console.log("Original Array: ", numArr, "\n");

// ========== Push & Pop Operation ==========

numArr.push("Tahir");
numArr.push(false);
console.log("After push operation: ", numArr);

numArr.pop();
console.log("After push operation: ", numArr, "\n");

/* ========== Shift & Unshift Opeartion. ========== 

   -(This method isn't a good practice, Beacuse it will shift & Unshift all the value before pushing an element. Imagine if the array contains millions of elements).
*/

numArr.unshift("Element");
console.log("After unshift operation: ", numArr);

numArr.shift();
console.log("After shift operation: ", numArr, "\n");

/* ========== Includes ========== 

   - Checks whether an element is present or not & Return Boolean vlaue.
*/

console.log("is 7 present in the array: ", numArr.includes(7, 2)); // (search ele, fromIdx)
console.log("is 88 present in the array: ", numArr.includes(88), "\n"); // (search ele)

/* ========== IndexOf ==========

   - If present, returns index of the element, otherwise -1 & if the element present multiple times 1st Occurance
*/

console.log("Index of 9 is: ", numArr.indexOf(9, 2), "\n"); // (Search ele, fromIdx)

/* ========== Join ========== 

   - It will convert the array into string
*/

const secondArr = [1, 2, 3, 4, 5, 6];
const store = secondArr.join();
console.log("Array converted into string: ", store, "\n");

/* ========== Slice & Splice ==========

   - (startIdx, EndIdx) -> Exclude ending index Element  -> Doesn't have any impact in Original Array

   - -1 is the last index, -2 is the second last element etc.
*/

const thirdArr = [10, 20, 30, 40, 50, 60, 70];

console.log("Original Array: ", thirdArr, "\n");
console.log("Slice the array according to index: ");
console.log(thirdArr.slice(2, -3));
console.log(thirdArr.slice(2, 4));
console.log(thirdArr.slice(2));
console.log(thirdArr.slice(), "\n");

// (startIdx, deleteCount)  -> Have Impact in Original Array
console.log("splicing 3 element from index 2: ", thirdArr.splice(2, 3));
console.log("Original Array: ", thirdArr, "\n");

// (startIdx, delCount, insertItem at Index 1)
thirdArr.splice(1, 0, "Lul");
console.log("Inserted element at index 1: ", thirdArr);
