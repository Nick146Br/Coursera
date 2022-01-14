var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function(name){
    console.log("Hello " + name);
}
array[3] = {
    course: " HTML, CSS & JS"
};
console.log(array);

array[2](array[0]);

//short hand array creation

var names = [
    "john",
    "joel",
    "ellie"
]

for(var i = 0; i < names.length; i++){
    console.log("Hello " + names[i]);
}