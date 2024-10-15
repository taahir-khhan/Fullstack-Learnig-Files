
// Print Name 'n' times

function printName(cnt, n) {

      if(cnt > n) return;

      console.log("Hello World", cnt);
      
      printName(cnt+1, n);
}

printName(1, 10);