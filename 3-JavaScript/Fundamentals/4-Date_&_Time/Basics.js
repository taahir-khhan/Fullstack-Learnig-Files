let myDate = new Date();

// ======== Diff. Method convert the date into different format ========

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString()); // Readable Format
// console.log(myDate.toString());

// console.log(myDate.toISOString()); // Not so much readable
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// ======== My created Date ========

let myCreatedDate = new Date(2022, 1, 15); // 0 - Jan, 1 - Feb etc.
// console.log(myCreatedDate.toDateString());

let myCreatedDateWithTime = new Date(2001, 9, 2, 1, 10);
// console.log(myCreatedDateWithTime.toLocaleString()); // 2/6/2001, 1:10:00 am

// TO DECLARE IN SPECIFIC FORMAT

let myCreatedDate1 = new Date("2021-02-33"); // Invalid Date
// console.log(myCreatedDate1.toDateString());

let myCreatedDate2 = new Date("2021-02-28"); // Sun Feb 28 2021
// console.log(myCreatedDate2.toDateString());

let myCreatedDate3 = new Date("06-22-2014"); // 22/6/2014, 12:00:00 am
// console.log(myCreatedDate3.toLocaleString());
