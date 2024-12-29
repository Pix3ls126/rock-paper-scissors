let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const messageDiv = document.querySelector("#message");

// Computer randomly chooses rock, paper, or scissors
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Determine the winner
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

// Handle button clicks
document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const resultMessage = playRound(playerChoice, computerChoice);

        // Update UI
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;
        messageDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${resultMessage}`;

        // Check for game over
        if (playerScore === 3 || computerScore === 3) {
            messageDiv.textContent += ` ${
                playerScore === 3 ? "Congratulations, you win!" : "Game over, computer wins!"
            }`;
            // Disable buttons
            document.querySelectorAll(".choice").forEach(btn => btn.disabled = true);
        }
    });
});
