
// Use closure to create private counter ?

function counter() {

      let _counter = 0;

      function add(incr) {
            _counter += incr;
      }

      function retrive() {
            return `Counter = ${_counter}`;
      }

      return {
            add,
            retrive,
      }
};

const cnt = counter();
cnt.add(4);
cnt.add(5);

console.log(cnt.retrive());