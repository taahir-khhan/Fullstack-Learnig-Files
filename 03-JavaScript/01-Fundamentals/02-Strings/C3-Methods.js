// ======== Important String Methods ========

let myName = "Bruce Wayne";

// ======== Find Length ========
console.log("\nLength of string: ", myName.length, "\n");

// ======== Retrieving a specific character ========
console.log("Characters at different index: ");
console.log(myName[4]);
console.log(myName.at(45)); // Out of index value is Undefind
console.log(myName.charAt(9), `\n`); // But in this property empty string

// ======== Testing if a string contains a substring ========

const browserName = "Chrome";

console.log("Checking substring: ");
if (browserName.includes("rot")) console.log(`Found \n`);
else console.log(`Not Found \n`);

// ======== Starts With &  Ends with ========

let fname = "Thalaiva";

console.log("Starts with and Ends with: ");

if (fname.startsWith("Thala")) {
  console.log("Yes");
} else {
  console.log("No");
}

if (fname.endsWith("ifa")) {
  console.log("Yes \n");
} else {
  console.log("No \n");
}

// ======== Find the position of a substring ========

const str = "My name is tahir khan and my family name is khan";

console.log("Index of: ", str);

// If the string contains the substring, indexOf() returns the index of the first occurrence of the substring. If the string does not contain the substring, it returns -1.
console.log(str.indexOf("tahir"));
console.log(str.indexOf("jahir"));

// To find subsequent string (Simillar substring), after the 1st occurance
let firstOcc = str.indexOf("khan");
// Here it will start searching from 18th index.
let lastOcc = str.indexOf("khan", firstOcc + 1);

console.log(firstOcc);
console.log(lastOcc, "\n");

// ======== Extracting a substrings from a string ========

const str2 = "The quick brown fox jumps over the lazy dog.";

console.log("Slice substring from: ", str2);

// Starts extracting from 31 index
console.log(str2.slice(31));

// from 4 - 19 index
console.log(str2.slice(4, 19));

// Go backward
console.log(str2.slice(-4));
console.log(str2.slice(-9, -5), "\n");

// ======== Changing case ========

const myName2 = "Tahir";

console.log("Changing case of: ", myName2);

console.log(`Uppercase: ${myName2.toUpperCase()}`);
console.log(`Lowercase: ${myName2.toLowerCase()}`);
// Doesn't affect the original value
console.log(`Original ${myName2} \n`);

// ======== Updating parts of String ========

const browserType = "mozilla";

console.log("Replacing parts of string: ", browserType);
console.log(browserType.replace("moz", "van"));

// If the pattern is an empty string, the replacement is prepended to the start of the string.
const myStr = "xxx ";
console.log(myStr.replace("", "_YYY_"));
