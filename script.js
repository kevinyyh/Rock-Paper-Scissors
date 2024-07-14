function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper or Scissors to play: ");
    if (choice === null) {
        console.log("Player cancelled");
        return;
    }
    choice = choice.toLowerCase();
    if (choice === "rock") {
        console.log(choice);
        return "rock";
    } else if (choice === "paper") {
        console.log(choice);
        return "paper";
    } else if (choice === "scissors") {
        console.log(choice);
        return "scissors";
    } else {
        getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === undefined) {
        return;
    }
    if (getComputerChoice === "rock") {
        if (getHumanChoice === "rock") {
            console.log("Tie! Current human score: " + humanScore + ". Current computer score: " + computerScore);
        } else if (getHumanChoice === "paper") {
            humanScore++;
            console.log("You Win! Paper beats Rock! Current human score: " + humanScore + ". Current computer score: " + computerScore);
        } else {
            computerScore++;
            console.log("You Lose! Rock beats Scissors! Current human score: " + humanScore + ". Current computer score: " + computerScore);
        }
    } else if (getComputerChoice === "paper") {
        if (getHumanChoice === "rock") {
            computerScore++;
            console.log("You Lose! Paper beats Rock! Current human score: " + humanScore + ". Current computer score: " + computerScore);
        } else if (getHumanChoice === "paper") {
            console.log("Tie! Current human score: " + humanScore + ". Current computer score: " + computerScore);
        } else {
            humanScore++;
            console.log("You Win! Scissors beats paper! Current human score: " + humanScore + ". Current computer score: " + computerScore);
        }
    } else {
        if (getHumanChoice === "rock") {
            humanScore++;
            console.log("You Win! Rock beats Scissors! Current human score: " + humanScore + ". Current computer score: " + computerScore);
        } else if (getHumanChoice === "paper") {
            computerScore++;
            console.log("You Lose! Paper beats Rock! Current human score: " + humanScore + ". Current computer score: " + computerScore);
        } else {
            console.log("Tie! Current human score: " + humanScore + ". Current computer score: " + computerScore);
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}