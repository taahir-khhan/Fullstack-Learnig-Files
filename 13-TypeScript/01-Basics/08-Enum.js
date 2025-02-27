"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processOrder(status) {
  switch (status) {
    case 0 /* OrderStatus.Pending */:
      console.log("Order is pending.");
      break;
    case 1 /* OrderStatus.Shipped */:
      console.log("Order has been shipped.");
      break;
    case 2 /* OrderStatus.Delivered */:
      console.log("Order has been delivered.");
      break;
    case 3 /* OrderStatus.Cancelled */:
      console.log("Order was cancelled.");
      break;
  }
}
processOrder(2 /* OrderStatus.Delivered */);
var seatChoice;
(function (seatChoice) {
  seatChoice["AISLE"] = "aisle";
  seatChoice["MIDDLE"] = "middle";
  seatChoice[(seatChoice["WINDOW"] = 3)] = "WINDOW";
  seatChoice[(seatChoice["FOURTH"] = 4)] = "FOURTH";
})(seatChoice || (seatChoice = {}));
var tkSeat = seatChoice.WINDOW;
var saSeat = seatChoice.MIDDLE;
console.log(tkSeat, saSeat);
