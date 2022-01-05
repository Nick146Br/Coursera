var x = "Hello World";

// var a = function(){...} Value of function assigned, when you call's a you call the function
// the reference of function is a now

function compare(x, y){ // arguments defined without 'var'
    return x > y;
}

var a = compare(4, 5); // the value of a is the result of the function compare(4, 5)

