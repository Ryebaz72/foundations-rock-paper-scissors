function getComputerChoice() {
    let computerSelection = "Rock";
    let randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
        case 0:
            break;
        case 1:
            computerSelection = "Paper";
            break;
        case 2:
            computerSelection = "Scissors";
            break;
        default:
            break;
    }
    return computerSelection;
}

function getHumanChoice() {
    let validChoice = false;
    let userChoice = prompt("Type your choice: either Rock, Paper or Scissors");
    while (!validChoice) {
        if (userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissors") {
            validChoice = true;
            return userChoice;
        } else {
            userChoice = prompt("Try again, please choose either Rock, Paper or Scissors");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    let winner = "No-one";
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log(`It's a draw this round! ${humanChoice} equals ${computerChoice}`);
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
        winner = "Player";
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
        winner = "Computer";
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
        winner = "Player";
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock") {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
        winner = "Computer";
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
        winner = "Player";
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
        winner = "Computer";
    }
    return winner;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let winner = "No-one";

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        let roundWinner = playRound(humanSelection, computerSelection);
        if (roundWinner === "Player") {
            playerScore++;
        } else if (roundWinner === "Computer") {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        winner = "Player";
    } else if (computerScore > playerScore) {
        winner = "Computer";
    } else {
        console.log(`It's a draw! You scored ${playerScore} and the computer scored ${computerScore}.`);
        return;
    }
    console.log(`${winner} is the winner.`)
}

playGame();