
// Adding dynamic property & value in objects

// Example-1

const key = "age";
const val = 17;

const user = {
    [key] : val,
}

// Two way of accesing the property
// console.log(user[key]);
// console.log(user.age);





// Example-2 (Other ways)

const x = {};

// Dynamic assignment of key & values 

const a = "num1";
const b = "num2";        
const c = "greet";               // Here key  is num1, num2 & greet
                                
x[a] = 10;
x[b] = 11;                      // Respective value assignment
x[c] = function print() {
    console.log("Hello Namastey");
};

// Here printing the whole object
// console.log(x);

// Object method call
// x.greet();         





// Example-3 (In case of object as expreesion)

const y = {};

// Until j value is srting it's fine , otherwise js engine convert the other values into string
// while assigning the key of the object

const j = 88;
y[j] = 33;

// when it tries to convert object to string it becomes  '[object object]'

const k = {key : "key5"};
const l = {key : "key6"};

y[k] = 111;  // Here it will be passing key as '[object object]'

y[l] = 222;  // so 222 is replaced in this string '[object object]'

console.log(y);
