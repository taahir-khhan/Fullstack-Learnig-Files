
// FUNCTION EXPRESSION

// When we can pass a fuction as expression, means assigned to
// varibles or passed as arguments.


// 1 - ANONYMOUS FUNCTION EXPRESSION

const add = function (x, y) {
    return x + y;
};

console.log(add(5,6));



// 2 - NAMED FUNCTION EXPRESSION

const subs = function ans(a,b) {
    return a - b;
};

console.log(subs(5,6));
// ans(); can't be call like that, because it is not defined in this scope



// 3 - FUNCTION EXPRESSION AS ARGUMENTS

function ans(fun) {
    return fun(5);
};

const val = ans(function (num) {
    return num * num;
});

console.log(val);