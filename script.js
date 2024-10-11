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

function playRound(humanChoice, computerChoice) {
    let winner = "";
    console.log('#pr1 - ', humanChoice, computerChoice);
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        winner = "No-one";
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors" || humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper" || humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        winner = "Player";
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper" || humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock" || humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
        winner = "Computer";
    }
    return winner;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let winner = "No-one";
    let humanSelection = "";
    let gameOver = false;
    let container = document.querySelector(".container");
    const scoreDisplay = document.createElement("div");
    container.appendChild(scoreDisplay);
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    scoreDisplay.appendChild(para1);
    scoreDisplay.appendChild(para2);
    if (!gameOver) {
        container.addEventListener("click", (event) => {
            let target = event.target;
            humanSelection = target.id;
            let computerSelection = getComputerChoice();
            console.log("#a-", target, humanSelection, computerSelection);
            let roundWinner = playRound(humanSelection, computerSelection);
            container.replaceChild(scoreDisplay, scoreDisplay);
            if (roundWinner === "Player") {
                playerScore++;
                para1.textContent = `You win this round! ${humanSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
                para2.textContent = `Your score: ${playerScore} and the computers score:  ${computerScore}.`;
            } else if (roundWinner === "Computer") {
                computerScore++;
                para1.textContent = `You lose this round! ${computerSelection.toUpperCase()} beats ${humanSelection.toUpperCase()}`;
                para2.textContent = `Your score: ${playerScore} and the computers score:  ${computerScore}.`;
            } else {
                para1.textContent = `It's a draw this round! ${humanSelection.toUpperCase()} equals ${computerSelection.toUpperCase()}`;
                para2.textContent = `Your score: ${playerScore} and the computers score:  ${computerScore}.`;
            }
            console.log("#score: ", playerScore, computerScore);
            if (playerScore === 5 || computerScore === 5) {
                if (playerScore > computerScore) {
                    winner = "Player";
                    gameOver = true;
                } else if (computerScore > playerScore) {
                    winner = "Computer";
                    gameOver = true;
                } else {
                    console.log(`It's a draw! You scored ${playerScore} and the computer scored ${computerScore}. Game Over Value :- ${gameOver}`);
                    gameOver = true;
                    return;
                }
                para2.textContent = `${winner} is the winner. You scored ${playerScore} and the computer scored ${computerScore}. Game Over Value :- ${gameOver}`;
                gameOver = true;
            }
        });
    }
}

playGame();