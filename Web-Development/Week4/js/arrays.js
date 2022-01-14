// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function(name){
//     console.log("Hello " + name);
// }
// array[3] = {
//     course: " HTML, CSS & JS"
// };
// console.log(array);

// array[2](array[0]);

//short hand array creation

var names = [
    "john",
    "joel",
    "ellie"
]

for(var name in names){
    console.log("Hello " + names[name]);
}

var myObj = {
    name: "Yaakov",
    course: " HTML, CSS & JS"
};

for(var prop in myObj) {
    console.log(prop /*name of the prop*/+ ": " + myObj[prop] /* access the value of prop */);
}