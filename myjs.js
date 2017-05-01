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


//modal

/*$( ".clickable" ).click(function(event) {
alert(event.target.id);
});*/

$( ".clickable" ).click(function() {
    //Store the title string from the called object's id
    var title = $(this).attr("id");
    alert(title);
});

var list = document.querySelector("saguaro", "haleakala", "everglades");

list.addEventListener("click", function(event){
    console.log(ans[event.target.id]);
    //above code will return the id value of the list item that is clicked on. the id corresponds with the key in the "info" object.
    
    document.querySelector("#title").textContent = info[event.target.id].name;
    
})




