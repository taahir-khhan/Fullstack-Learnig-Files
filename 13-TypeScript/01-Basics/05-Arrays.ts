const superPoets: string[] = ["Jawed Sahab"];
superPoets.push("Mirza Galib");
superPoets.push("Alama Iqbal");
superPoets.push("Jaun Elia");
console.log(superPoets, "/n");

const thierRating: number[] = [10];
thierRating.push(9);
thierRating.push(9.5);
console.log(thierRating, "/n");

// Another way of declaring array of type
const thinkers: Array<string> = [];
thinkers.push("Jawed Sahab");
thinkers.push("Anurag Kashyap");
console.log(thinkers, "/n");

type User = {
  name: string;
  age: number;
};

const enrolledStudents: Array<User> = [];
enrolledStudents.push({ name: "JaiDeep Alhawat", age: 45 });
enrolledStudents.push({ name: "Nawauddin Sidiqui", age: 53 });
console.log(enrolledStudents, "/n");

// Using 2D Array
const matrix: Array<Array<string>> = [
  ["a", "b", "c"],
  ["d", "e", "f", "g"],
  ["h", "i", "j", "k", "l"],
];
console.log(matrix);

export {};
