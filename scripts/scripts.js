let computerSelection = function getComputerChoice() {
  let rps = new Array("rock", "paper", "scissors");
  let rand = Math.floor(Math.random() * 3);
  console.log(rps[rand]);
  return rps[rand];
};

let humanSelection = function getHumanChoice() {
  let choice = window.prompt("Enter your play");
  console.log(choice);
  return choice.toLowerCase();
};

function checkWinner() {
  if (roundCounter == 4) {
    if (humanScore > computerScore) {
      console.log("Human Wins!");
    } else if (computerScore > humanScore) {
      console.log("Computer Wins!");
    } else {
      console.log("The game is a tie!");
    }
    playAgain()
  }
}

function playAgain() {
    if (roundCounter == 4) {
        let replay = window.prompt("Do you want to play again? Type 'Yes' or 'No'").toLowerCase()
        if (replay === "yes") {
            humanScore = 0;
            computerScore = 0;
            return playGame()
        } else {
            console.log("Thanks for playing!")
        }
    }
}

let humanScore = 0;
let computerScore = 0;
let roundCounter;
function playGame() {
  for (roundCounter = 0; roundCounter < 5; roundCounter++) {
    console.log(roundCounter);
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return console.log("Human won this round!");
      } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return console.log("Human won this round!");
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return console.log("Human won this round!");
      } else if (humanChoice === computerChoice) {
        return console.log("This round was a draw, play again!");
      } else {
        computerScore++;
        return console.log("Computer won this round");
      }
    }
    playRound(humanSelection(), computerSelection());
    checkWinner();
  }
}

playGame();
