var playRps = function () {
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    // Computer makes random choice (0-1)
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    // Game logic
    var compare = function (choice1, choice2) {
        // Matching choices
        if (choice1 === choice2) {
            alert("The result is a tie! Try again.");
        }
        // Other scenarios
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "rock wins";
            } else {
                return "paper wins";
            }
        }
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "paper wins";
            } else {
                return "scissors wins";
            }
        }
        if (choice1 === "scissors") {
            if (choice2 === "paper") {
                return "scissors wins";
            } else {
                return "rock wins";
            }
        }
        // User chooses rope for some reason
        if (choice1 === "rope") {
            alert("Don't change the subject!");
        } else { // User made an invalid choice
            alert("You didn't choose one of the three allowed items. You rebel!");
        }
    }
    // Replay or log result
    var result = compare(userChoice, computerChoice);
    if ((userChoice === computerChoice) || (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") || (userChoice === "rope")) {
        playRps();
    } else {
        console.log(compare(userChoice, computerChoice));
    }
}
// Let's play!
playRps();