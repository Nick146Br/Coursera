function Circle (radius){
    this.radius = radius;

    this.getArea = function (){
        return Math.PI * Math.pow(this.radius, 2);
    };
    
}

var myCircle = new Circle(10);
console.log(myCircle.getArea());