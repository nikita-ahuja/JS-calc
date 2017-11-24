$(document).ready(function(){
  var testNumLength = function(number) {
        if (number.length > 9) {
            totalDiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totalDiv.text("Err");
            }
        }
    };
    var number = "";
    var newNumber = "";
    var operator = "";
    var totalDiv = $("#total");
    totalDiv.text("0");

$("#numbers > a").not("#clear,#clearall").click(function(){
    number += $(this).html();
    totalDiv.text(number);
    testNumLength(number);
    if (operator != "") {
      number == number
      totalDiv.text("");
      newNumber += $(this).html();
      debugger;
    }
});


$("#operators > a").not("#clear,#clearall").click(function(){
    operator = $(this).html();
    number = number
    totalDiv.text(operator);
    // debugger;
});

$("#clear").on("click", function(){
    console.log("clear");
    totalDiv.text("");
    number = number;
    operator = operator;

})

$("#clearall").on("click", function(){
    totalDiv.text("");
    number = "";
    operator = "";
})



});
