

// +++++  For-of Loop  +++++ 

const myArray = [1, 2, 3, 4, 5];

// for (const num of myArray) {
//       console.log(num);
// }



/*   +++++++++  Maps  +++++++++
    - In javascript it contains value in (key, pair) format & only contains unique values based on unique keys
*/

const map = new Map();
map.set(1, "AUS")
map.set(2, "IND")
map.set(3, "SA")
map.set(3, "PAK")

// console.log(map);


// Itrating over map, it gives [key, pair] in array format

// for (const val of map) {    
//       console.log(val);
// }


// But we can destructure it 

// for (const [key, val] of map) {
//       console.log(key, val);
// }




// +++++++++  Printing Objects  +++++++++

const user = {
      name : "Tahir",
      age : 22
};


// By using the For-of loop we can't itrate over object

// for (const val of user) {
//       console.log(val);
// }