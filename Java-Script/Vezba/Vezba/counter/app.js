const incrementOne = document.querySelector("#inc1");
const decrementOne = document.querySelector("#dec1");
const incrementTwo = document.querySelector("#inc2");
const decrementTwo = document.querySelector("#dec2");

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

const scoreOne = document.querySelector(".points1");
const scoreTwo = document.querySelector(".points2");

let playerOneScore = 0;
let playerTwoScore = 0;

const win = document.querySelector("#winner");

const playerOne = prompt("Unesite ime igraca");
const playerTwo = prompt("Unesite ime igraca");

const capitalizePlayerOne =
  playerOne.charAt(0).toUpperCase() + playerOne.slice(1).toLowerCase();

const capitalizePlayerTwo =
  playerTwo.charAt(0).toUpperCase() + playerTwo.slice(1).toLowerCase();

p1.textContent = capitalizePlayerOne;
p2.textContent = capitalizePlayerTwo;

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  win.textContent = "";
  enableButtons();
});

function winner() {
  scoreOne.textContent = playerOneScore;
  scoreTwo.textContent = playerTwoScore;

  if (playerOneScore >= 7) {
    win.textContent = `${capitalizePlayerOne} is the winner!`;
    disableButtons();
  } else if (playerTwoScore >= 7) {
    win.textContent = `${capitalizePlayerTwo} is the winner!`;
    disableButtons();
  }
}
function disableButtons() {
  incrementOne.disabled = true;
  decrementOne.disabled = true;
  incrementTwo.disabled = true;
  decrementTwo.disabled = true;
}

function enableButtons() {
  incrementOne.disabled = false;
  decrementOne.disabled = false;
  incrementTwo.disabled = false;
  decrementTwo.disabled = false;
}

incrementOne.addEventListener("click", () => {
  playerOneScore++;
  scoreOne.textContent = playerOneScore;
  winner();
});
decrementOne.addEventListener("click", () => {
  if (playerOneScore > 0) {
    playerOneScore--;
    scoreOne.textContent = playerOneScore;
  }
});
incrementTwo.addEventListener("click", () => {
  playerTwoScore++;
  scoreTwo.textContent = playerTwoScore;
  winner();
});
decrementTwo.addEventListener("click", () => {
  if (playerTwoScore > 0) {
    playerTwoScore--;
    scoreTwo.textContent = playerTwoScore;
  }
});
