var statements = ["Betty's real name is Master Pain.", "Wimp Lo beat The Chosen One.", "There was a Lion King Reference.", "Face to foot style is effective on Earth.", "Gnodab is the opposite of badong."];

var answers = ["true", "false"];

var quotes = ["That tiny net was sure-fire master!", "If you've got an ass, I'll kick it!"];

var userInput = $(this);

var numbers = ["1", "2", "3", "4", "5"];

statements[0] === true;
statements[1] === false;
statements[2] === true;
statements[3] === false;
statements[4] === true;

$("#ichi").click(function() {});

$("#ni").click(function() {});


if (userInput && statements[0] || userInput && statements[1] || userInput && statements[2] || userInput && statements[3] || userInput && statements[4] === true) {
    $("#quatro").html("Your Score is now " + numbers++);
    alert(quotes[0]);
    setTimeout(function() {

    }, 5000);
    $("#tres").html(statements++);
};

if (userInput && statements[0] || userInput && statements[1] || userInput && statements[2] || userInput && statements[3] || userInput && statements[4] != true) {

    alert(quotes[1]);
    setTimeout(function() {

    }, 5000);
    $("#tres").html(statements++);
};