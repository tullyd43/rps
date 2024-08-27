let computerSelection = function getComputerChoice() {
  let rps = new Array("rock", "paper", "scissors");
  let rand = Math.floor(Math.random() * 3);
  console.log(rps[rand]);
  if (rand === 0) {
    let img = document.querySelector("#pcIMG");
    img.setAttribute("src", "./images/rock.png");
  } else if (rand === 1) {
    let img = document.querySelector("#pcIMG");
    img.setAttribute("src", "./images/paper.png");
  } else if (rand === 2) {
    let img = document.querySelector("#pcIMG");
    img.setAttribute("src", "./images/scissors.png");
  } else {
    let img = document.querySelector("#pcIMG");
    img.setAttribute("src", "./images/Question_mark_(black).svg.webp");
  }
  return rps[rand];
};
function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      console.log("Human Wins!");
      scoreUpdater();
    } else if (computerScore > humanScore) {
      console.log("Computer Wins!");
      scoreUpdater();
    } else if (humanScore === computerScore) {
      console.log("The game is a tie!");
      scoreUpdater();
    } else {
      console.log("Play another round!");
      scoreUpdater();
    }
  }
  scoreUpdater();
  playAgain();
}

function playAgain() {
  if (humanScore === 5 || computerScore === 5) {
    let replay = window
      .prompt("Do you want to play again? Type 'Yes' or 'No'")
      .toLowerCase();
    if (replay === "yes") {
      humanScore = 0;
      computerScore = 0;
      let img = document.querySelector("#humanIMG");
      img.setAttribute("src", "../images/Question_mark_(black).svg.webp");
      let img2 = document.querySelector("#pcIMG");
      img2.setAttribute("src", "../images/Question_mark_(black).svg.webp");
      scoreUpdater();
    } else {
      console.log("Thanks for playing!");
    }
  }
}

let btnSel = document.querySelectorAll(".selection");
console.log(btnSel);

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function scoreUpdater() {
  let humSco = document.querySelector("#human-score");
  let humScoString = humanScore.toString();
  humSco.textContent = humScoString;
  let pcSco = document.querySelector("#pc-score");
  let pcScoString = computerScore.toString();
  pcSco.textContent = pcScoString;
}

btnSel[0].addEventListener("click", () => {
  let img = document.querySelector("#humanIMG");
  img.setAttribute("src", "../images/rock.png");
  playRound(rock, computerSelection());
  scoreUpdater();
  checkWinner();
});
btnSel[1].addEventListener("click", () => {
  let img = document.querySelector("#humanIMG");
  img.setAttribute("src", "../images/paper.png");
  playRound(paper, computerSelection());
  scoreUpdater();
  checkWinner();
});
btnSel[2].addEventListener("click", () => {
  let img = document.querySelector("#humanIMG");
  img.setAttribute("src", "../images/scissors.png");
  playRound(scissors, computerSelection());
  scoreUpdater();
  checkWinner();
});

let humanScore = 0;
let computerScore = 0;
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
