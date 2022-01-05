var a = 7;
b = a;
console.log("a: " + a);
console.log("b: " + b);
b = 5;
console.log("after b update");
console.log("a: " + a);
console.log("b: " + b);

var a = {x: 7};
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);
