let myDate = new Date();

// ======== Diff. Methods to convert the date into different format ========

console.log("\n Readable formats: ");
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toString(), "\n");

console.log("Not so much readable: ");
console.log(myDate.toISOString());
console.log(myDate.toJSON(), "\n");

console.log(typeof myDate, "\n");

// ======== My created Date ========

let myCreatedDate = new Date(2022, 1, 15); // 0 - Jan, 1 - Feb etc.
console.log(myCreatedDate.toDateString(), "\n");

let myCreatedDateWithTime = new Date(2001, 9, 2, 1, 10);
console.log(myCreatedDateWithTime.toLocaleString(), "\n");

// TO DECLARE IN SPECIFIC FORMAT

let myCreatedDate1 = new Date("2021-02-33");
console.log(myCreatedDate1.toDateString(), "\n");

let myCreatedDate2 = new Date("2021-02-28");
console.log(myCreatedDate2.toDateString(), "\n");

let myCreatedDate3 = new Date("06-22-2014");
console.log(myCreatedDate3.toLocaleString(), "\n");
