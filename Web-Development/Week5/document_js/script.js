document.addEventListener("DOMContentLoaded", function (event){
    function sayHello (event){
        this.textContent = "Said it!";
        var name = document.getElementById("name").value;
        var message = "<h2>Hello " + name + "!</h2>";
        // document.getElementById("content").textContent = message;
        document.getElementById("content").innerHTML = message;
        var title = "Lecture53";
        if(name === "student"){
            title = document.querySelector("#title").textContent;
            title += " with a little funny";
        }
        document.querySelector("#title").textContent = title; 
    }
    
    document.querySelector("button").addEventListener("click", sayHello);

    document.querySelector("body").addEventListener("mousemove", 
    function(event){
        console.log(event.clientX + " " + event.clientY);
    })
})


// document.querySelector("#navbarToggle").addEventListenner("blur")
// == $.("#navbarToggle").blur(function (event))