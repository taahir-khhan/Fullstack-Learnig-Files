// --- Variable ---

let score: number | string = 123;
score = "483";
score = 909;

// --- Object ---

type User = {
  _id: number;
  name: string;
};

type Admin = {
  _id: number;
  username: string;
};

let anurag: User | Admin = {
  _id: 123,
  name: "Anurag",
};

anurag = {
  _id: 123,
  username: "anurag@kashyap",
};

// --- Function ---

function getDBid(id: number | string) {
  console.log(`DB id: ${id}`);
}
getDBid(123);
getDBid("123");

function getUserId(id: number | string) {
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

let rollNos: number[] = [121, 367, 192]; // can contain only number
let rollNos2: string[] = ["121", "367", "192"]; // can contain only string

// To store either number or string
let rollNos3: number[] | string[] = [904, 892, 930];
rollNos3 = ["904", "892", "930"];

// To store number, string and other types of data
let rollNos4: (number | string | boolean)[] = [123, "name", false];

//  --- Literal Allotment ---

let planeSeatAllotment: "aisle" | "middle" | "window";
planeSeatAllotment = "middle";
planeSeatAllotment = "aisle";
// planeSeatAllotment = "crew"; // Not Allowed

export {};
