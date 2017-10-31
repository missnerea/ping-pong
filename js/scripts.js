$(document).ready(function () {
    $("#number form").submit(function (event) {
        event.preventDefault();
        $("ul").empty();
        var inputtedNumber = parseInt($("#inputNumber").val());
        var countedNumbers = countUp(inputtedNumber);
        for (var first = 0; first <= countedNumbers.length - 1; first++) {
            $("ul#output").append("<li>" + countedNumbers[first] + "</li>");
        };
        clearForm("input");
    });
});




function countUp(number) {
    var total = [];
    for (var first = 1; first <= number; first++) {
        if (first % 15 === 0) {
            total.push("PINGPONG");
        } else if (first % 5 === 0) {
            total.push("PONG");
        } else if (first % 3 === 0) {
            total.push("PING");
        } else {
            total.push(first);
        }
    };
    return total;
};
