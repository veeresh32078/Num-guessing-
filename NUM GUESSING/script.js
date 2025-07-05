let secretNumber;
let attemptsLeft = 5;

function generateRandomNumber() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
}

generateRandomNumber();

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    message.style.color = "orange";
    return;
  }

  if (attemptsLeft <= 0) {
    message.textContent = "Game Over! No attempts left.";
    message.style.color = "red";
    return;
  }

  if (userGuess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    message.style.color = "green";
    disableInput();
  } else if (userGuess < secretNumber) {
    message.textContent = "📉 Too low!";
    message.style.color = "blue";
  } else {
    message.textContent = "📈 Too high!";
    message.style.color = "blue";
  }

  attemptsLeft--;
  attemptsDisplay.textContent = attemptsLeft;

  if (attemptsLeft === 0 && userGuess !== secretNumber) {
    message.textContent = `Game Over! The number was ${secretNumber}.`;
    message.style.color = "red";
    disableInput();
  }
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
}

function resetGame() {
  attemptsLeft = 5;
  generateRandomNumber();
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("attempts").textContent = attemptsLeft;
  document.getElementById("message").textContent = "";
}