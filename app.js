var firstName = document.getElementById("fName");
var lastName = document.getElementById("lName");
var generateButton  = document.getElementById("generateJoke");

var generateJoke = function () {
    alert("Salut!");
};


generateButton.addEventListener("click", generateJoke);

var handleResult = function(data){
    console.log(data.value.joke);
    document.getElementById("joke").innerHTML = data.value.joke;
};

var url = "http://api.icndb.com/jokes/random?firstName=Ionica&lastName=Petrescu";

makeAjaxRequest(url, handleResult);