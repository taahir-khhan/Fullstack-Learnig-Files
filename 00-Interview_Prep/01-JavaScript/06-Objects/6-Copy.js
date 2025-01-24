// ======== Shallow Copy ========

const instaUser1 = {
  name: "Copying Of Objects",
};

const instaUser2 = instaUser1;
instaUser2.name = "Shallow Copy";
console.log(instaUser1, instaUser2, "\n");

// ======== Deep Copy ========

const xUser1 = {
  name: "Deep Copy",
};

// ---- 1) Object.assign ----
const xUser2 = Object.assign({}, xUser1);
xUser2.name = "Object assign";
console.log(xUser1, xUser2, "\n");

// ---- 2) Stringify & Parse ----
const xUser3 = JSON.parse(JSON.stringify(xUser1));
xUser3.name = "Stringify & Parse";
console.log(xUser1, xUser3);

// ---- 3) Spread Opeartor ----
const xUser4 = { ...xUser1 };
xUser4.name = "Spread Opeartor";
console.log(xUser1, xUser4);
