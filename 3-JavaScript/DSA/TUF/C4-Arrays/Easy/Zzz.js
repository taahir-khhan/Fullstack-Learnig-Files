

const numsArr = [1, 2, 2, 2, 3, 3, 4, 4, 5];

const set = new Set(numsArr);
console.log(set);

const uniqueArr = Array.from(set);
console.log(uniqueArr);