
// Higher order function

function add(a, b) {
    return a + b;
}

function subs(a, b) {
    return a - b;
}

// Function that operates on other function by taking them as argument
function performTask(x, y, fun) {
    return fun(x, y);
}

console.log("addition: " + performTask(8, 5, add));
console.log("substraction: " + performTask(8, 5, subs));