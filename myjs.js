 var npData = [{
    "name" : "Laura",
    "question1" : "Hi I like parks",
    "question2" : "Me too"
},
 {
    "name" : "Rori",
    "question1" : "She likes parks",
    "question2" : "So do I"
}];

console.log(npData[1].name);

var saguaro = document.getElementById("saguaro");

saguaro.addEventListener("click", function () {
    console.log("howdy!");
    document.getElementById("test").style.display = "block";
    document.getElementById("name").innerHTML = npData[1].name;
});

