$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#number").val());
      var result = pingpong(number);
      $("#result").text(result);
    });
  });


function countUp(number) {
    var total = [];
    for (var first = 1; first <= number; first++) {
        if (first % 15 === 0) {
            total.push("");
        } else if (first % 5 === 0) {
            total.push("");
        } else if (first % 3 === 0) {
            total.push("");
        } else {
            total.push(first);
        }
    };
    return total;
};
