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

let humanScore = 0;
let computerScore = 0;

function playRound(getHumanChoice, getComputerChoice) {
    let result = document.querySelector("#result");
    if (getHumanChoice === undefined) {
        return;
    }
    switch(getHumanChoice) {
        case "rock":
            switch (getComputerChoice) {
                case "rock":
                    result.textContent = "Human: " + getHumanChoice + ", Computer: " + getComputerChoice + 
                    ". Tie! Current human score: " + humanScore + ". Current computer score: " + computerScore + ".";
                    break;
                case "paper":
                    computerScore++;
                    result.textContent = "Human: " + getHumanChoice + ", Computer: " + getComputerChoice + 
                    ". Computer wins! Current human score: " + humanScore + ". Current computer score: " + computerScore + ".";
                    break;
                case "scissors":
                    humanScore++;
                    result.textContent = "Human: " + getHumanChoice + ", Computer: " + getComputerChoice + 
                    ". Human wins! Current human score: " + humanScore + ". Current computer score: " + computerScore + ".";
                    break;
                default:
                    console.log("What happened?");
            }
            break;
        case "paper":
            switch (getComputerChoice) {
                case "rock":
                    humanScore++;
                    result.textContent = "Human: " + getHumanChoice + ", Computer: " + getComputerChoice + 
                    ". Human wins! Current human score: " + humanScore + ". Current computer score: " + computerScore + ".";
                    break;
                case "paper":
                    result.textContent = "Human: " + getHumanChoice + ", Computer: " + getComputerChoice + 
                    ". Tie! Current human score: " + humanScore + ". Current computer score: " + computerScore + ".";
                    break;
                case "scissors":
                    computerScore++;
                    result.textContent = "Human: " + getHumanChoice + ", Computer: " + getComputerChoice + 
                    ". Computer wins! Current human score: " + humanScore + ". Current computer score: " + computerScore + ".";
                    break;
                default:
                    console.log("What happened?");
            }
            break;
        case "scissors":
            switch (getComputerChoice) {
                case "rock":
                    computerScore++;
                    result.textContent = "Human: " + getHumanChoice + ", Computer: " + getComputerChoice + 
                    ". Computer wins! Current human score: " + humanScore + ". Current computer score: " + computerScore + ".";
                    break;
                case "paper":
                    humanScore++;
                    result.textContent = "Human: " + getHumanChoice + ", Computer: " + getComputerChoice + 
                    ". Human wins! Current human score: " + humanScore + ". Current computer score: " + computerScore + ".";
                    break;
                case "scissors":
                    result.textContent = "Human: " + getHumanChoice + ", Computer: " + getComputerChoice + 
                    ". Tie! Current human score: " + humanScore + ". Current computer score: " + computerScore + ".";
                    break;
                default:
                    console.log("What happened?");
            }
            break;
        default:
            console.log("What happened?");
    }
    if (humanScore === 5) {
        result.textContent = "Human wins the game! Human vs. computer: " + humanScore + " vs. " + computerScore + ".";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if (computerScore === 5) {
        result.textContent = "Computer wins the game! Human vs. computer: " + humanScore + " vs. " + computerScore + ".";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const container = document.querySelector("#container");

let getHumanChoice;

container.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        getHumanChoice = e.target.id;
        console.log(getHumanChoice);
    }
    playRound(getHumanChoice, getComputerChoice());
});
