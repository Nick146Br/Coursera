var literalCircle ={ // New Object ();
    radius: 10,
    getArea: function(){
        console.log(this);
        return Math.Pi*Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());