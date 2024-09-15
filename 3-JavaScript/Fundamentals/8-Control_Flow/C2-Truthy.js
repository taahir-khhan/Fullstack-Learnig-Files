/* ========== Falsy Values ==========

   - false keyword
   -  0
   - (-0)
   - 0n
   - null
   - undefind 
   - NaN
   - empty string ("")

   * These are all falsy values, others are truthy, That means whenever in conditioal statement, checks the above values, it always evalutes the above values as false.
*/

if (NaN) {
  console.log(`Falsy Values`);
}

/* ========== Truthy Values ==========

   - Not empty string ("0", " ")
   - numbers
   - []
   - {}
   - function (){}
*/

if (87) {
  console.log("\nTruthy Values \n");
}

// Checking Object Emptiness
let obj = {};

if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
}
