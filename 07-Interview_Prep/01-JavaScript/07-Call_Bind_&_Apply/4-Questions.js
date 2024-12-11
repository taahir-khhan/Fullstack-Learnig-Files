

// Question - 1

const person = { name : "Tahir" };

function print(age) {
      return `${this.name} is ${age}`;
}

// console.log(print.call(person, 33));
// console.log(print.bind(person, 44)); // It will return a function


// Question - 2

const age = 18;

const person2 = {
      name : "Chiru",
      age : 19,
      func : function () {
            return this.age;
      },
};

const person3 = {age : 27};
// console.log(person2.func.call(person3));



// Question - 3

var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

//   console.log(data.getStatus()); 
//   console.log(data.getStatus.call(this)); // Part of global object
}, 0);


// Question - 4

const animals = [
      { species: 'Lion', name: 'King' },
      { species: 'Whale', name: 'Queen' }
];
    
function printAnimals(i) {
      this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
      }
      this.print();
}

for(let i = 0; i<animals.length; i++) {
      printAnimals.call(animals[i], i);
}

    