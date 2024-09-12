

/*       Nullish Coalescing Operator (??)

    - When we fetch data from the database, At that time sometimes it returns values in null or undefind , it further creates problem in our program.

    - To Prevent these types of Error we use this operator

    - The second value is (Preventive value)
*/

// Examples

function ran() {
    return undefined;
}

let store = ran();

// if(store ?? 1) {
//     console.log("Executed", store);
// }


let val;
// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 20;
val = undefined ?? 33 ?? 44 ?? 55;

// console.log(val);




// Ternary Operator
// condition ? true : false;

const balance = 12;

// balance !== 0 ? console.log("I have some money") : console.log("I don't have any money");