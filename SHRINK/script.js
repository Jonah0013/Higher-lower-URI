var number = Math.floor(Math.random() * 13) + 1,
  currentNumber = number,
  score = 0,
  result = document.querySelector(".result"),
  scoreEl = document.querySelector(".score");
function generateNumber() {
  number = Math.floor(Math.random() * 13) + 1;
}
function generateSuit() {
  suit = "♠♥♦♣"[Math.floor(Math.random() * 4)];
  document.getElementById("current-number").style.color =
    suit == "♥" || suit == "♦" ? "#EF4444" : "#7C3AED";
}
function displayNumber() {
  value = "A23456789JQK".charAt(number - 1);
  document.querySelector(".top-left").innerHTML = value + " " + suit;
  document.querySelector(".bottom-right").innerHTML = value + " " + suit;
  document.querySelector(".center").innerHTML = suit;
}
generateNumber();
generateSuit();
displayNumber();
function guess(high) {
  generateNumber();
  generateSuit();
  if ((high && currentNumber < number) || (!high && currentNumber > number)) {
    score++;
    result.innerHTML = "Correct!";
  } else if (currentNumber == number) {
    result.innerHTML = "Safe";
  } else {
    score = 0;
    result.innerHTML = "Incorrect!";
  }
  scoreEl.innerHTML = "Score: " + score;
  displayNumber();
  currentNumber = number;
}
document.getElementById("high").onclick = () => guess(1);
document.getElementById("low").onclick = () => guess(0);
document.getElementById("hide-rules").onclick = function () {
  var rules = document.querySelector(".rules");
  if (rules.style.display == "none") {
    rules.style.display = "block";
    this.innerHTML = "Hide Rules";
  } else {
    rules.style.display = "none";
    this.innerHTML = "Show Rules";
  }
};
