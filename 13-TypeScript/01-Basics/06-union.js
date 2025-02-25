"use strict";
// --- Variable ---
Object.defineProperty(exports, "__esModule", { value: true });
var score = 123;
score = "483";
score = 909;
var anurag = {
    _id: 123,
    name: "Anurag",
};
anurag = {
    _id: 123,
    username: "anurag@kashyap",
};
// --- Function ---
function getDBid(id) {
    console.log("DB id: ".concat(id));
}
getDBid(123);
getDBid("123");
function getUserId(id) {
    // id.toLowerCase() // Here the id type is 'number | string' and it can't execute this line
    if (typeof id === "string") {
        // But if we check before doing this specific type operation, Now it is allowed
        console.log(id.toUpperCase());
    }
    if (typeof id === "number") {
        console.log(id.toFixed(1));
    }
}
getUserId("42uudja");
getUserId(882.293);
// --- Array ---
var rollNos = [121, 367, 192]; // can contain only number
var rollNos2 = ["121", "367", "192"]; // can contain only string
// To store either number or string
var rollNos3 = [904, 892, 930];
rollNos3 = ["904", "892", "930"];
// To store number, string and other types of data
var rollNos4 = [123, "name", false];
//  --- Literal Allotment ---
var planeSeatAllotment;
planeSeatAllotment = "middle";
planeSeatAllotment = "aisle";
