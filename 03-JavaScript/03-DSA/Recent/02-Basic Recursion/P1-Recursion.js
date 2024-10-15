
/* Recursion
      
      - When a function calls itself, until a specified condition is met i.e recursion

      - Base Case / Condition -> Used to terminate the recursion call.

      - Stack Overflow  -> When we call a function, in the background the function call  is stored in the Stack memory, And when this memory is full we call it Stack overflow.

      - Recursion Tree  -> Tree representation of of recursion call.
*/


// Infinite Recursion call

function recur() {
      console.log(1);
      recur();
}

recur();