
// Looping through object & prnting its key and value

const obj = {
    name : "Tahir",
    age : 22,
    isLearning : true,
};

// For in loop, becuase we can't use normal loop

// for(key in obj) {
//     console.log(key, obj[key]);
// };





const user = {
    name : "tahir",
    age : 22,
    state : "Odisha",
}

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

// it will assign obj1 as key and its value as whole object

const obj3 = {obj1, obj2};
// console.log(obj3);
// console.log(obj3.obj2.c);


// This will  store the properties obj1 and obj2 into obj4

const obj4 = Object.assign({},obj1, obj2);
// console.log(obj4);


// Instead of using the assign use spread operator

const obj5 = {...obj1, ...obj2};
// console.log(obj5);


// return  key and values of object user in array format
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


//Check for is this property is there inside the user
// console.log(user.hasOwnProperty('state'));

