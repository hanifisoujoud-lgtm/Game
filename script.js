let secretNumber;
let score;
let highscore = 0;

function resetGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;

  document.getElementById("message").textContent = "Start Guessing...";
  document.getElementById("score").textContent = "Score : " + score;
  document.getElementById("secret").textContent = "?";
  document.getElementById("guessInput").value = "";
  document.body.style.backgroundColor = "black";
}

resetGame();

document.getElementById("check").addEventListener("click", function () {
  const guess = Number(document.getElementById("guessInput").value);

  if (!guess) {
    document.getElementById("message").textContent = "⛔ Enter a number !";
  } 
  else if (guess === secretNumber) {
    document.getElementById("message").textContent = "🎉 Correct Number !";
    document.getElementById("secret").textContent = secretNumber;
    document.body.style.backgroundColor = "green";

    if (score > highscore) {
      highscore = score;
      document.getElementById("highscore").textContent = "Highscore : " + highscore;
    }
  } 
  else {
    if (score > 1) {
      document.getElementById("message").textContent =
        guess > secretNumber ? "📈 Too High !" : "📉 Too Low !";
      score--;
      document.getElementById("score").textContent = "Score : " + score;
    } else {
      document.getElementById("message").textContent = "💥 You lost !";
      document.getElementById("score").textContent = "Score : 0";
      document.getElementById("secret").textContent = secretNumber;
    }
  }
});

document.getElementById("again").addEventListener("click", resetGame);

