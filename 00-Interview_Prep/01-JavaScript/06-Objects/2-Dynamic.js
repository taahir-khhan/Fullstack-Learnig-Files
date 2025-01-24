// ======== Dynamic Object Creation ========

// ---- Example-1 ----

const key = "age";
const val = 17;
const user = {
  name: "Random user",
  // Only if we use square brackets, it will consider variable value as key
  [key]: val,
};
console.log("Now we can acess properties in two way:", user);
console.log(user[key], user.age, "\n");

// ---- Example-2 ----

const x = {};

const a = "num1";
const b = "num2";
const c = "greet";

// Respective value assignment
x[a] = 10;
x[b] = 11;
x[c] = function print() {
  console.log("Hello Namastey");
};

console.log(x, "\n");

// ---- Example-3 ----

const y = {};

// As long as the "key" of the object a string it's fine. Otherwise, the JavaScript engine converts other values into strings, While assigning them as keys of the object.
const j = 88;
y[j] = 33;
console.log(y, y[j], y["88"]);

// when it tries to convert object to string it becomes  '[object object]'
const k = { key: "key5" };
const l = { key: "key6" };

y[k] = 111; // Here it will be passing key as '[object object]'
y[l] = 222; // so 222 is replaced in this string '[object object]'

console.log(y);
