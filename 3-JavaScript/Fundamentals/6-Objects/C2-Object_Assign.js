
// ++++++++++ Assigning two objects into another ++++++++++

const user1 = {
      name : "Ali",
      age : 22,
};

const user2 = {
      name : "Chada",
      age : 21,
};

const combine = {user1, user2};
// console.log(combine);




// ++++++++++ To Assign The Value of Two Object as property ++++++++++

const obj1 = {breed : "animal", name : "kutta"};
const obj2 = {isHuman : true, age : 2000, name: "Biili"};

const obj3 = Object.assign(obj1, obj2);

// console.log(obj3);
// console.log(obj1);                           // Only Obj1 is also modified
// console.log(obj2);
// console.log(obj1 === obj3);



// ++++++++++ To avoid the Above Case ++++++++++

const obj4 = {1 : "Tahir", 2: 22};
const obj5 = {3 : "Shoyeb", 4:24};

const obj6 = Object.assign({}, obj4, obj5);

// console.log(obj6);                          
// console.log(obj4);               // Modification in any original object doesn't occur
// console.log(obj5);                          
// console.log(obj4 === obj6);




// ++++++++++ Best way to do is use Spread Operator ++++++++++

const obj7 = {...obj1, ...obj2 };

// console.log(obj7);





// ++++++++++ Database Returns The Data In This Format ++++++++++

const instaUser = [
      {
            id : 1,
            email : "abc1@gmail.com"
      },
      {
            id : 2,
            email : "def2@gmail.com"
      },
      {
            id : 3,
            email : "ghi3@gmail.com"
      },
];

// console.log(instaUser[2].email);




// ++++++++++ Some Object Methods ++++++++++

const user3 = {
      name : "Shoyeb",
      age : 17,
      isMan : true,
      insObj: {
            fname: "Tahir",
            lname: "khan",
      }
};

// console.log(user3.hasOwnProperty('isMan'));
// console.log(Object.keys(user3));                             
// console.log(Object.values(user3));
// console.log(Object.entries(user3));