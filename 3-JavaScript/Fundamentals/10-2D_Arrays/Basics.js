

/*                       Points To Remember

   - In JavaScript, there is no direct syntax for creating 2D arrays as with other commonly used programming languages like C, C++, and Java.

   -You can create two-dimensional arrays in JavaScript through jagged arrays — an array of arrays.
   
   - We can specify the array of rows of different size.
*/

let matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12]
];

// console.log(matrix);
// console.log(matrix[1][2]);      // Accessing


// For better understanding of the indexes print in table format
// console.table(matrix);


const twoDimenArr = [[1,2,3], [4, 5, 6, [10, 20, [22, 11]]], [7,8,9]]
console.log(twoDimenArr[1][3][2][1]);


// First & Last elements

// console.log(`Fisrt element of the matrix is: ${matrix[0][0]}`);
// console.log(`Last element of the matrix is: ${matrix[matrix.length-1][(matrix[matrix.length - 1]).length - 1]}`);