/*     ======== Variables ========

   - In javascript var, let & const are three ways to declare variables.

   - javascript varibles are not attached to any perticular type, means it can store any type of data i.e num, string, boolean etc.

   - That's why it is known as dynamically typed language. 
*/

var userId = 123487;
var userId2 = "54657774";

let userName = "Tahir";
let userName2 = false;

const currentState = true;
const currentState2 = "ajao re";

// Printing of variables value
// console.log("\n", userId, userName, currentState);

// Printing vabriables in tabular format
// console.table([userId, userName, currentState]);

/*  ========  Diffrence Between Var, let & Const  ========

   Var:-
      - Var type variables are functional scope.
      - It can be redeclared & re-initialized  as many time as possible.
      - declared without initialization.
      - It can be accessed before declaration.

   Let:-
      - Let type of variables are block scoped.
      -(Block is a certain region of program where variables are exist and identified, Beyond that it doesn't.)
      - It can't be redeclared. But reinitialized as many time as possible.
      - It can't be accessed before declaration.

   Const:-
      - Const are also block scoped.
      - It should be intialized during declaration.
      - It is not possible to re-initialize of redeclared.
      - Same here
*/
