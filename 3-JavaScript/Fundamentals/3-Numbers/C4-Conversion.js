const num = new Number("123"); // Converted to number i.e 123
console.log(num);

const num2 = new Number("123abc"); // NaN
console.log(num2);

const num3 = new Number(undefined); // NaN
console.log(num3);

const biggestNum = Number.MAX_VALUE;
console.log(biggestNum);

const smallestNum = Number.MIN_VALUE;
console.log(smallestNum);

const infiniteNum = Number.POSITIVE_INFINITY;
console.log(infiniteNum);

const negInfiniteNum = Number.NEGATIVE_INFINITY;
console.log(negInfiniteNum);

const notANum = Number.NaN;
console.log(notANum);
