
let cnt = 1;

function print() {

      if( cnt > 3) return;

      console.log("Hello");
      cnt++
      
      print();
}

print();