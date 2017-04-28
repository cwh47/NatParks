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
    document.getElementById("saguaro").style.display = "block";
    document.getElementById("saguaro").innerHTML = [0].name;
});
/*var modal = document.getElementById("npModal");
var click = document.getElementById("npClick");
var span = document.getElementsByClassName("class")[0];
click.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/