
// Anonymous function
// A function without a name, are often used as function expression
// or callback passed to other functions.

// passed as value to add variable

const add = function() {
    console.log("hello");
}

add();

// self invoking anonymous function

(function (){
    console.log("hii");
})();

// passed as an arguments

function ans(fun) {
    return fun(5);
};

const val = ans(function (num) {
    return num * num;
});

// Anonymous function don't work independently
// function () {
//     console.log("Namatey");
// }




