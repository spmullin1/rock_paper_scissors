function computerPlay() {
    choice = Math.floor(Math.random() * 4);
    if (choice == 1) {
        computerSelection = "rock";
    }
    else if (choice == 2) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

computerSelection = computerPlay();

let playerSelection = prompt("Rock, Paper, or Scissors?");
playerSelection.toLowerCase()

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        resultsMessage = `Congratulations! The computer picked ${computerSelection} and you won!`
    } else if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock") {
        resultsMessage = `Damn sorry bro. The computer picked ${computerSelection} and you lost.`
    } else if (playerSelection == computerSelection) {
        resultsMessage = "You both chose the same, it's a tie!"
    } else {
        resultsMessage = "Bro that is not how you even play what are you doing bro"
    }
    return resultsMessage
}

console.log(resultsMessage)

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(resultsMessage);
    }
}

game()

