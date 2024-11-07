
// JSON Stringify converts object to string

const obj1 = {
    name : "Tahir",
    age : 22,
    state : "Odisha",
};

const objStr = JSON.stringify(obj1, ["name", "age"]); // Only name age will converted into string
console.log(objStr);

// JSON parse convert it back to object

const obj2 = JSON.parse(objStr);
obj2.name = "kk menon";
console.log(obj2);