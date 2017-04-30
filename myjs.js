$.ajax({
    type: "GET"
    , dataType: "json"
    , url: "/server/npData.json"
    , cache: false
    , success: function (data) {
        console.log(data);
    }
});


var saguaro = document.getElementById("saguaro");
saguaro.addEventListener("click", function () {
    console.log("howdy!");
    document.getElementById("saguaro").style.display = "block";;
});

var haleakala = document.getElementById("haleakala");
haleakala.addEventListener("click", function () {
    console.log("howdy!");
});

$("#saguaro").on("mouseover", function(){
    $("#littleLines").css('display','');
});
