
// Qustion-5

// Rest operator always passed in last parameters
function print(frutiList, favFruit, ...pear) { 
      // But here it will be anywhere , bacause here it is spread operator
      return [...frutiList, ...pear, favFruit];                  
}

console.log(print(["apple", "grapes"], "jamun", "banana"));




// Question-6, what is the output ?

const obj = {
      a : 17,
      b: 18,
      a : 33,  // Here a is redeclared, 17 will be replaced by 33
               // Because last defined value is considered
  };
  console.log(obj);
  
  
  // Question-7 create a function multiplyByTwo, that multiplies
  //            all numeric property value by 2.
  
  function multiplyByTwo(obj) {
      for(key in obj) {
          if(typeof obj[key] === "number") {
              obj[key] *= 2;
          }
      }
  };
  
  let nums = {
      x : 100,
      y : 12,
      title : "My nums",
  };
  multiplyByTwo(nums);
  console.log(nums);