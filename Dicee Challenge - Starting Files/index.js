var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randDice1 = "images/dice" + randomNumber1.toString() + ".png"
document.querySelector(".img1").src = randDice1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randDice2 = "images/dice" + randomNumber2.toString() + ".png"
document.querySelector(".img2").src = randDice2;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins!"
} else {
  document.querySelector("h1").textContent = "It's a draw!"
}
