

let students = [
    {name: "Tahir", roll: 23, mark: 122},
    {name: "Aftab", roll: 14, mark: 147},
    {name: "Ayas", roll: 33, mark: 157},
    {name: "shoyeb", roll:41 , mark: 163}
];
console.log(students);

// Question-1, return only name of students in Capital
// Loop
let names = [];
for(let i = 0; i<students.length; i++) {
    names.push(students[i].name.toUpperCase());
}
console.log(names)

// Map
const names2 = students.map((cur) => cur.name.toUpperCase());
console.log(names2);

// forEach
let names3 = [];
students.forEach((cur, i) => {
    names3[i] = cur.name.toUpperCase();
});
console.log(names3);