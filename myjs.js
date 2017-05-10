//saguaro hover 1
$("#saguaro").on("mouseover", function () {
    $("#saguaroLines").css('display', 'inline');
});
$("#saguaro").on("mouseout", function () {
    $("#saguaroLines").css('display', 'none');
});
//haleakala hover 2
$("#haleakala").on("mouseover", function () {
    $("#haleakalaLines").css('display', 'inline');
});
$("#haleakala").on("mouseout", function () {
    $("#haleakalaLines").css('display', 'none');
});
//everglades hover 3
$("#everglades").on("mouseover", function () {
    $("#evergladesLines").css('display', 'inline');
});
$("#everglades").on("mouseout", function () {
    $("#evergladesLines").css('display', 'none');
});
//whitesands hover 4
$("#ws").on("mouseover", function () {
    $("#wsLines").css('display', 'inline');
});
$("#ws").on("mouseout", function () {
    $("#wsLines").css('display', 'none');
});
//sanj hover 5
$("#sanj").on("mouseover", function () {
    $("#sanjLines").css('display', 'inline');
});
$("#sanj").on("mouseout", function () {
    $("#sanjLines").css('display', 'none');
});
//cascades hover 6
$("#cascades").on("mouseover", function () {
    $("#cascadesLines").css('display', 'inline');
});
$("#cascades").on("mouseout", function () {
    $("#cascadesLines").css('display', 'none');
});
//antelope hover 7
$("#antelope").on("mouseover", function () {
    $("#antelopeLines").css('display', 'inline');
});
$("#antelope").on("mouseout", function () {
    $("#antelopeLines").css('display', 'none');
});
//smoky hover 8
$("#smoky").on("mouseover", function () {
    $("#smokyLines").css('display', 'inline');
});
$("#smoky").on("mouseout", function () {
    $("#smokyLines").css('display', 'none');
});
//yosemite hover 9 
$("#yosemite").on("mouseover", function () {
    $("#yosemiteLines").css('display', 'inline');
});
$("#yosemite").on("mouseout", function () {
    $("#yosemiteLines").css('display', 'none');
});
//zion hover 10
$("#zion").on("mouseover", function () {
    $("#zionLines").css('display', 'inline');
});
$("#zion").on("mouseout", function () {
    $("#zionLines").css('display', 'none');
});

//WORKING CODE MODAL
//SAGUARO MODAL 
/*$("#saguaro").on("click", function () {  //pulls html data
    $("#box").html();
});
$("#saguaro").on("click", function () {  //trigger css modal
    $("#box").css('display', 'inline');
});
$("#saguaro").on("click", function () {  //show "x"
    $("#a.boxclose").css('display', 'inline');
});
$("#saguaro").on("click", function () {  //trigger overlay
    $("#overlay").css('display', 'inline');
});
$("#boxclose").on("click", function () {  //closes box
    $("#box").css('display', 'none');
});
$("#boxclose").on("click", function () {  //removes overlay
    $("#overlay").css('display', 'none');
});*/




//modal window opens
var ans;
saguaro = document.getElementById("laura")
saguaro.addEventListener("click", function (){
    console.log(ans["laura"].question1);
    document.getElementById("modal").style.display = "block";
});
