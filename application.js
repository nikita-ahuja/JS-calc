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
      // totalDiv.text("");
      newNumber += $(this).html();
      totalDiv.text(newNumber);
    }
});

$("#operators > a").not("#equals").click(function(){
    operator = $(this).html();
    totalDiv.text(operator);
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

$("#equals").on("click", function(){
  var finalAnswer = ""
  if (operator == "*") {
    finalAnswer = (number * newNumber);
  } else if (operator == "+") {
    finalAnswer = (number + newNumber);
  } else if (operator == "-") {
    finalAnswer = (number - newNumber);
  } else if (operator == "/") {
    finalAnswer = (number / newNumber);
  };
  totalDiv.text(finalAnswer);
  // debugger
});


});
