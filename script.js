// let name = prompt("What is your name?");
// let username = `${name}`;
// document.getElementById("username").innerHTML = username;

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

  if (userChoice === "bomb") {
    return "You won!";
  }
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}.`);
  console.log(`Computer chose: ${computerChoice}.`);

  console.log(determineWinner(userChoice, computerChoice));
};
