function submitName() {
  const name = document.getElementById("inputBox").value;
  if (name) {
    localStorage.setItem("username", name);
    location.href = "index.html";
  } else {
    alert("Please enter your name!");
  }
}

function displayUsername() {
  const username = localStorage.getItem("username");
  if (username) {
    document.getElementById("username").innerText = username;
  }
}

displayUsername();

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
    alert("Game Over! Please reset the game.");
    return;
  }

  const playerSelection = getUserChoice(userChoice);
  const computerSelection = getComputerChoice();

  if (playerSelection === "rock") {
    document.getElementById("player-selection").innerHTML =
      '<img src="imgs/rock.png" alt="Rock" />';
  } else if (playerSelection === "paper") {
    document.getElementById("player-selection").innerHTML =
      '<img src="imgs/paper.png" alt="Paper" />';
  } else if (playerSelection === "scissors") {
    document.getElementById("player-selection").innerHTML =
      '<img src="imgs/scissors.png" alt="Scissors" />';
  }

  if (computerSelection === "rock") {
    document.getElementById("computer-selection").innerHTML =
      '<img src="imgs/rock.png" alt="Rock" />';
  } else if (computerSelection === "paper") {
    document.getElementById("computer-selection").innerHTML =
      '<img src="imgs/paper.png" alt="Paper" />';
  } else if (computerSelection === "scissors") {
    document.getElementById("computer-selection").innerHTML =
      '<img src="imgs/scissors.png" alt="Scissors" />';
  }

  const result = determineWinner(playerSelection, computerSelection);

  if (result === "You won!") {
    playerScore++;
  } else if (result === "Computer won.") {
    computerScore++;
  }

  alert(result);

  document.getElementById("score1").innerText = playerScore;
  document.getElementById("score2").innerText = computerScore;

  roundsPlayed++;

  if (roundsPlayed >= maxRounds) {
    if (playerScore > computerScore) {
      alert("Game Over! You win please reset the game!");
    } else if (playerScore < computerScore) {
      alert("Game Over! The computer wins please reset the game!");
    } else {
      alert("Game Over! It's a tie please reset the game!");
    }

    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }
};

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  document.getElementById("score1").innerText = playerScore;
  document.getElementById("score2").innerText = computerScore;
  document.getElementById("player-selection").innerText = "Your choice: ";
  document.getElementById("computer-selection").innerText =
    "Computer's choice: ";

  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
};
