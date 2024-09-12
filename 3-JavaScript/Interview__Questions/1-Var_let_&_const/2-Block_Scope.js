
// Can be accessed out side scope, because var stored/Attached in global scope
{
    var x = 30
    // console.log(x);
}

x = 100
// console.log(x);


function greet() {
    var myName = "Tahir"
    console.log(`Hello ${myName}`);
}

// greet();
// console.log(myName);

// Can't be accessed out side block scope
{
    let y = 20;
    const z = 50;
    // console.log(y, z);
}
console.log(y,z);