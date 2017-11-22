$(document).ready(function(){
  var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
  var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");

$("#numbers > a").not("#clear,#clearall").click(function(){
    // console.log("clicked");
    number += $(this).html();
    totaldiv.text(number);
    testNumLength(number);
});

$("#clear").on("click", function(){
    console.log("clear");
    $("#total").text("");
})

$("#clearall").on("click", function(){
    console.log("clear");
    $("#total").text("");
})




});