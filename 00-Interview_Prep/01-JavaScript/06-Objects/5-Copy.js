// ======== Shallow Copy ========
const instaUser1 = {
  name: "Tahir",
  age: 22,
};

const instaUser2 = instaUser1;
instaUser2.name = "Chada";
console.log(instaUser1);
console.log(instaUser2, "\n");

// ======== Deep Copy ========
const xUser1 = {
  name: "Chada",
  age: 99,
};

// ======== 3 ways to deep copy an object i.e Object.assign, JSON.parse and spread operator ========
// const xUser2 = Object.assign({}, xUser1);
// const xUser2 = JSON.parse(JSON.stringify(xUser1));
const xUser2 = { ...xUser1 };

xUser2.name = "Tahir";
console.log(xUser1, xUser2);
