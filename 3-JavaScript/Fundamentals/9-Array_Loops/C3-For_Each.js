
/*    +++++ For Each +++++
      
      - It is an array method which itrate through array elements.

      - All the looping function takes argument a callback function

      - The CB have the access of array ele, idx and the whole array

      - It will not return anything, even if we explicitly define it.
*/



const languages = ["Odia", "Urdu", "Hindi", "English"];


// languages.forEach( (items) => {
//       console.log(items);
// });


// function print(items) {
//       console.log(items);
// }

// languages.forEach(print)





// languages.forEach( (items, idx, arr) => {
//       console.log(items, idx, arr);
// } );





let lang = languages.forEach( (items) => {
      return items === "Urdu";
});

console.log(lang);




const mobileData = [
      {
            name : "Motrola",
            price: 15000
      },
      {
            name : "Google Pixel",
            price: 49000
      },
      {
            name : "I-phone",
            price: 65000
      },
];

// mobileData.forEach( (items) => {
//       console.log(items.name);
//       console.log(items.price);
// });