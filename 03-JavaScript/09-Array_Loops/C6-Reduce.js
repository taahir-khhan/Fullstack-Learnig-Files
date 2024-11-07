/*  ========= Reduce =========

    - It is used to accumulate a single value from an array.

    - It wiil reduce all the array elements into a single value.

    - Initial value -> If not provided, then the first element of the array is used as the initial value.
*/

const numsArr = [2, 4, 6, 8, 10];

// Ex-1

let initialval = 0;
let total = numsArr.reduce((acc, ele) => acc + ele, initialval);
console.log(total, "\n");

// Ex-2

let total2 = numsArr.reduce((acc, ele) => acc + ele, 10);
console.log(total2, "\n");

// Ex-3

const shoppingCart = [
  {
    itemName: "Jeans",
    price: 1199,
  },
  {
    itemName: "T-shirt",
    price: 699,
  },
  {
    itemName: "Shirt-full-sleeve",
    price: 1699,
  },
  {
    itemName: "Hoodie",
    price: 799,
  },
];

const totalPriceToPay = shoppingCart.reduce((acc, currItem) => {
  return acc + currItem.price;
}, 0);
console.log(totalPriceToPay);
