function Circle (radius){
    this.radius = radius;
}

Circle.prototype.getArea = function (){ // function will exist in ever single instance of Circle
    return Math.PI * Math.pow(this.radius, 2);
};

var myCircle = new Circle(10);
console.log(myCircle.getArea());