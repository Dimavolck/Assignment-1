

document.querySelector("#butt2").addEventListener("click", function (){

    if (document.querySelector("#butt2").innerText == "Dark Theme") {
        toggleDarkTheme();
    }else{
        toggleLightTheme();
    }
    
});

function toggleDarkTheme(){
    document.getElementById("nav").classList.add("dark-nav");
    document.getElementById("nav").classList.remove("nav");

    document.getElementById("butt2").innerText = "Light Theme";
    console.log("complete");
}

function toggleLightTheme(){
    document.getElementById("nav").classList.add("nav");
    document.getElementById("nav").classList.remove("dark-nav");

    document.getElementById("butt2").innerText = "Dark Theme";
}