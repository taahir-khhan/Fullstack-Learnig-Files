let students = [
  { name: "Tahir", rollNumber: 33, mark: 78 },
  { name: "Shoyeb", rollNumber: 12, mark: 76 },
  { name: "Chada", rollNumber: 56, mark: 44 },
  { name: "Arbab", rollNumber: 76, mark: 12 },
];

// Fetch the only names of the student in capital letter

// Traditional For loop
let name = [];
for (let i = 0; i < students.length; i++) {
  name.push(students[i].name.toUpperCase());
}
// console.log(name);

// Using Map
let names = students.map((stu) => stu.name.toUpperCase());
// console.log(names);

// Fetch the student details whoever scores is greater than 50

// Traditional For Loop
let greaterThanFifty = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].mark > 50) {
    greaterThanFifty.push(students[i]);
  }
}
// console.log(greaterThanFifty);

// Using Filter
let greaterThanFifty2 = students.filter((stu) => stu.mark > 50);
// console.log(greaterThanFifty2);

// sum of marks of all students
let totalMark = students.reduce((acc, stu) => acc + stu.mark, 0);
// console.log(totalMark);

// Return only names of the students who scored morethan 60

let ans = students.filter((stu) => stu.mark > 60).map((stu) => stu.name);
console.log(ans);

// Return total marks of the students who scored more than 60, and those whos mark is less than 60, give them a 20 mark grace and then return the total mark who scored now greater tha 60.

let totalMark60 = students
  .map((stu) => {
    if (stu.mark < 60) {
      stu.mark += 20;
    }

    return stu;
  })
  .filter((stu) => stu.mark > 60)
  .reduce((acc, stu) => acc + stu.mark, 0);

console.log(totalMark60);
