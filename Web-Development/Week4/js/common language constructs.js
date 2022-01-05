var x = "4", y = 4;

if(x==y){// java script converts automatically the type of one variable to type of  other
    console.log("x = '4' is equal to y = 4");
}

// Strict equality
if(x===y){
    console.log("Strict: x='4' is not equal to y=4")
}

// Statement false
if( false || null || undefined || "" || 0 || NaN)console.log("This line won't ever execute");
else console.log("All false");


//Statement true
if( true && "hello" && 1 && -1 && "false")console;log("All true");