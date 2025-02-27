// Enum are especially useful when you have a fixed set of related values that a variable can take
// Practical Examples
const enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
  Cancelled,
}

function processOrder(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Pending:
      console.log("Order is pending.");
      break;
    case OrderStatus.Shipped:
      console.log("Order has been shipped.");
      break;
    case OrderStatus.Delivered:
      console.log("Order has been delivered.");
      break;
    case OrderStatus.Cancelled:
      console.log("Order was cancelled.");
      break;
  }
}

processOrder(OrderStatus.Delivered);

enum seatChoice {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = 3,
  FOURTH,
}

const tkSeat = seatChoice.WINDOW;
const saSeat = seatChoice.MIDDLE;
console.log(tkSeat, saSeat);

export {};
