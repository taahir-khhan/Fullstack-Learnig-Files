// We can write multiple statements by separating them using (,) comma, But it is not a good practice. For single line it's okay.
if (true) console.log("\nHello"), console.log("Hiii\n");

let balance = 33;

if (balance >= 0 && balance <= 10) {
  console.log("Number is betwwen 1 - 10 \n");
} else if (balance >= 11 && balance <= 20) {
  console.log("Number is betwwen 10 - 20 \n");
} else if (balance >= 21 && balance <= 30) {
  console.log("Number is betwwen 20 - 30 \n");
} else if (balance >= 31 && balance <= 40) {
  console.log("Number is betwwen 30 - 40 \n");
} else {
  console.log("Number is betwwen 40 - Infinity \n");
}

// To eliminate writing multiple if-else, We use Switch Case.

let month = "Mar";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "Feb":
    console.log("February");
    break;
  case "Mar":
    console.log("March");
    break;
  case "Jun":
    console.log("June");
    break;
  default:
    console.log("This is not a month");
}
