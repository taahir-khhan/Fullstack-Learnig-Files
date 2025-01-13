/* ======== Var ========
   - It can be accessed before declaration. And also redeclaration and reintialization is possible in this type of variable.
*/

// Accessing variable before declaration
console.log(a);
var a = 10;

// Redeclaring and re-initialzing the 'var' variable
var a = "Hii";
console.log(a);

/* ======== Let ========
   - Only re-initialization is possible in let type of variable. 

   - Redeclaration and accessing before declaration is not possible because it is stored in separate memory space which is not accessible until the variable is initialized.

   - The time between declaration and initialization of "let" and "const" variable is known as "Temporal Dead Zone".
*/

let b = 20;
console.log(b);

// Reinitializing the 'let' variable
b = "hii";
console.log(b);

/* ======== Const ========
   - Initialization while declaration is necessary in this type of variable.

   - We can't redecalre, reinitialize and access before declaration.
*/
const c = 10;
console.log(c);

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
