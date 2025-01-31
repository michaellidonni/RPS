const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won.";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won.";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won.";
    } else {
      return "You won!";
    }
  }
};

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

const playGame = (userChoice) => {
  if (roundsPlayed >= maxRounds) {
    // Prevent playing after 5 rounds
    alert("Game Over! Please reset the game.");
    return;
  }

  const playerSelection = getUserChoice(userChoice);
  const computerSelection = getComputerChoice();

  // Get the result of the game
  const result = determineWinner(playerSelection, computerSelection);

  // Update player's and computer's selections on the page
  document.getElementById(
    "player-selection"
  ).innerText = `Your choice: ${playerSelection}`;
  document.getElementById(
    "computer-selection"
  ).innerText = `Computer choice: ${computerSelection}`;

  // Update the score based on the result
  if (result === "You won!") {
    playerScore++;
  } else if (result === "Computer won.") {
    computerScore++;
  }

  // Display the result of each round in an alert
  alert(result);

  // Display the updated scores
  document.getElementById("score1").innerText = playerScore;
  document.getElementById("score2").innerText = computerScore;

  // Increment rounds played
  roundsPlayed++;

  // Disable the play buttons after 5 rounds
  if (roundsPlayed >= maxRounds) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }
};

const resetGame = () => {
  // Reset scores and selections
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  document.getElementById("score1").innerText = playerScore;
  document.getElementById("score2").innerText = computerScore;
  document.getElementById("player-selection").innerText = "Your choice: ";
  document.getElementById("computer-selection").innerText =
    "Computer's choice: ";

  // Re-enable the play buttons
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
};
