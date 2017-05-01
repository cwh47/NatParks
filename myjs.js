//access json using ajax
$.ajax({
    type: "GET"
    , dataType: "json"
    , url: "/server/npData.json"
    , cache: false
    , success: function (data) {
        console.log(data);
    }
});
//display block
var saguaro = document.getElementById("saguaro");
saguaro.addEventListener("click", function () {
    console.log("howdy!");
    document.getElementById("saguaro").style.display = "block";;
});
var haleakala = document.getElementById("haleakala");
haleakala.addEventListener("click", function () {
    console.log("howdy!");
});
//saguaro hover
$("#saguaro").on("mouseover", function () {
    console.log("woof");
    $("#saguaroLines").css('display', 'inline');
});
$("#saguaro").on("mouseout", function () {
    console.log("meow");
    $("#saguaroLines").css('display', 'none');
});

//haleakala hover
$("#haleakala").on("mouseover", function () {
    $("#haleakalaLines").css('display', 'inline');
});
$("#haleakala").on("mouseout", function () {
    console.log("meow");
    $("#haleakalaLines").css('display', 'none');
});

//everglades hover
$("#everglades").on("mouseover", function () {
    $("#evergladesLines").css('display', 'inline');
});
$("#everglades").on("mouseout", function () {
    console.log("meow");
    $("#evergladesLines").css('display', 'none');
});