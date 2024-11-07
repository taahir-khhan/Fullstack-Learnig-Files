
// 1 - Shallow Copy

const instaUser1 = {
      name : "Tahir",
      age : 22,
};

const instaUser2 = instaUser1;
instaUser2.name = "Chada";
// console.log(user1, user2);


// 2 - Deep Copy

const xUser1 = {
      name : "anas",
      age: 99,
};

// const xUser2 = Object.assign({}, xUser1);   Method-1

// const xUser2 = JSON.parse(JSON.stringify(xUser1));  Method-2

const xUser2 = {...xUser1};      // Method-3

xUser2.name = "Shoyeb Anas";
console.log(xUser1, xUser2);