// -> We can't modify the properties of predefind Js objects, Example

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// -> Why we can't modify because, writable property of this is fasle, And we can't change that.

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// -> Check this in our own object

const obj = {
  name: "Learning",
  age: 23,
  isLearning: true,
};

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// -> We can also implement the above predefind object property behaviour in our own object properties.

// ======= Examples =======

// 1) Normally we can change the property values, but if we set writable: false; Now we can't modify the property value.

Object.defineProperty(obj, "age", {
  writable: false,
});

obj.age = 44;
// console.log(obj.age);s
// console.log(Object.getOwnPropertyDescriptor(obj, "age"));

// 2) Normally we can itrate over an object, but if we set enumerable: false; we can't itrate over an object

const obj2 = {
  name: "Practice",
  isTryingHard: true,
  isDescipline: true,
};

// Here we can Itrate

for (const key in obj2) {
  console.log(`${key} : ${obj2[key]}`);
}

Object.defineProperties(obj2, {
  name: {
    enumerable: false,
  },
  isTryingHard: {
    enumerable: false,
  },
  isDescipline: {
    enumerable: false,
  },
});

// Here we can't

for (const key in obj2) {
  console.log(`${key} : ${obj2[key]}`);
}
