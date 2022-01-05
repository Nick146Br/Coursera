function multiply(x, y) { // Functions are objects
    return x*y;
}


// Function factory
function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier*x;
    }
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);

console.log(multiplyBy3(15));