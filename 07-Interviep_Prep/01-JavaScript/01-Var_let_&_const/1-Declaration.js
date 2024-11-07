// ======== Var ========
// It can be re-initialized , re-declared & can be accessed before declaration.
console.log(a);
var a = 10;
console.log(a);
var a = "Hii";
console.log(a);

// ======== Let ========
//  re-initialization only
let b = 20;
console.log(b);
b = "hii";
console.log(b);

// ======== Const ========
// Only initialization while declaration
const c = 10;
console.log(c);

/* ======== Difference between var & let keyword ? ========

   - Var is function scope i.e it can be accessible and manipulated anywhere inside the function. Whereas Let is block scoped i.e it is identified or exist inside a specific scope, outside that it is non existent or dead.

   - Hoisting happens differently in these two type of variables.
*/
