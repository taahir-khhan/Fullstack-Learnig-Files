

const myObj = {
      name: "Learning",
      age: 23,
      isLearning: () => {
            console.log("Yes");
      }
};


// Itrating Over Object

// for (const key in myObj) {
//       console.log("Property name:", key);
//       console.log("Property value:", myObj[key]);
// }


// Destructuring Object property name

// for (const [key, val, ...val2] in myObj) {
//       console.log(key, val, val2);
// }




// Itrating over Array

const myArr = [12, 14, 16, 18, 20, 22, 23, 24, 26, 27, 28, 29];

// for (const idx in myArr) {
//       console.log("Array Index:", idx);
//       console.log("Array Element:", myArr[idx]);
// }


// Destructuring Array Index

// for (const [key, val] in myArr) {
//       console.log(key, val);
// }



// By using Forin Loop, We can't itrate a Map.

const map = new Map();

map.set(1, "AUS")
map.set(2, "IND")
map.set(3, "SA")
map.set(3, "SA")

// for (const key in map) {
//       console.log(key);
// }