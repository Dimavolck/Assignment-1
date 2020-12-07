
document.querySelector("#butt1").addEventListener("click", function (){

});

document.querySelector("#butt2").addEventListener("click", function (){

    if (document.querySelector("#butt2").innerText == "Dark Theme") {
        toggleDarkTheme();
    }else{
        toggleLightTheme();
    }
    
});

document.querySelector("#butt3").addEventListener("click", function (){});
document.querySelector("#butt4").addEventListener("click", function (){});





function toggleDarkTheme(){

    document.getElementById("butt1").classList.add("dark-butt1");
    document.getElementById("butt1").classList.remove("butt1");
    
    document.getElementById("nav").classList.add("dark-nav");
    document.getElementById("nav").classList.remove("nav");

    document.getElementById("butt3").classList.add("dark-butt3");
    document.getElementById("butt3").classList.remove("butt3");

    document.getElementById("butt4").classList.add("dark-butt4");
    document.getElementById("butt4").classList.remove("butt4");

    document.getElementById("main").classList.add("dark-main");
    document.getElementById("main").classList.remove("main");

    document.getElementById("ta").classList.add("dark-ta");
    document.getElementById("ta").classList.remove("ta");

    document.getElementById("butt2").innerText = "Light Theme";
}

function toggleLightTheme(){

    document.getElementById("butt1").classList.add("butt1");
    document.getElementById("butt1").classList.remove("dark-butt1");

    document.getElementById("nav").classList.add("nav");
    document.getElementById("nav").classList.remove("dark-nav");

    document.getElementById("butt3").classList.add("butt3");
    document.getElementById("butt3").classList.remove("dark-butt3");

    document.getElementById("butt4").classList.add("butt4");
    document.getElementById("butt4").classList.remove("dark-butt4");

    document.getElementById("main").classList.add("main");
    document.getElementById("main").classList.remove("dark-main");

    document.getElementById("ta").classList.add("ta");
    document.getElementById("ta").classList.remove("dark-ta");

    document.getElementById("butt2").innerText = "Dark Theme";
}
