let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "rock"
    } else if (random == 1) {
        return "paper"
    } else if (random == 2) {
        return "scissors"
    }

}
    
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    // Validate the input
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return choice;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // console.log(`You chose: ${humanChoice}`);
    // console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice == computerChoice) {
        alert("It's a tie!")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You win this round!");
        humanScore++;
    } else {
        alert("Computer wins this round!");
        computerScore++;
    }
    alert(`Score: You ${humanScore} - ${computerScore} Computer`);

}

function playGame() {
    while (humanScore < 3 && computerScore < 3) {
        playRound();
    }
    if (humanScore == 3) {
        alert("Good job Mimi")
    } else {
        alert("L bozo Mimi ")
    }
}

playGame()