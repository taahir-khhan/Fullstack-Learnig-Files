/* ========= Hoisting =========
   - Hoisting is a phenomena in javascript by which we can access variables & 
   functions even before executing them.
   
   - It is possile due to Execution Context. And only in case of "var" and "functions".
*/

console.log(x);
var x = 10;

greet();
console.log(greet); // reference of the function

function greet() {
  console.log("Say Hello India");
}
