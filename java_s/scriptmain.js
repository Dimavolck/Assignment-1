//function calls

document.querySelector("#butt1").addEventListener("click", function (){

    if (document.getElementById('text1').style.visibility === "hidden"){
        toggleRefreshText()
    }else{
        toggleNewText()
    
    }

});

document.querySelector("#butt2").addEventListener("click", function (){

    if (document.querySelector("#butt2").innerText == "Dark Theme") {
        toggleDarkTheme();
    }else{
        toggleLightTheme();
    }
    
});

document.querySelector("#butt3").addEventListener("click", function (){

    toggleNoteAdder(notesArray)

});


document.querySelector("#butt4").addEventListener("click", function (){

    toggleRemoveText()

});

//array declaration

var notesArray = [

    {title:"note one", body:"some text 1"},
    {title:"note two", body:"some text 2"}

]

// functions which work to change the css

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


function toggleRemoveText(){

    document.getElementById('text1').style.visibility = "hidden";
}

function toggleRefreshText(){

    document.getElementById('text1').style.visibility = "visible";

}

function toggleNewText(){
    
    document.getElementById("ta").value = "";

}

function toggleNoteAdder(notesArray){
    var getArray = []
    var ta = document.getElementById("ta").value;
    userArray = ta.split('\n');
    notesArray.push({
        title: userArray[0], body: ta
    })
    
    console.log(notesArray);

    var newList = document.createElement("li");
    newList.classList.add("list");
    newList.append(notesArray[notesArray.length - 1].title);

    var newUl = document.getElementById("untitled");
    newUl.append(newList);
}

var notesItemList = document.querySelector('#untitled');
notesItemList.addEventListener('click', (x) => {
    var ListItem = x.target.innerHTML;
    for (var i = 0; i < notesArray.length; i++){
        if (notesArray[i].title == ListItem){
            document.querySelector('#ta').value = notesArray[i].body;
        }
    }
});
