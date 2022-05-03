let guessResults = document.querySelector("#results");
const guessCountArea = document.querySelector("#guesses");
const fTryArea = document.querySelector("#firstTry");
const correctArea = document.querySelector("#correct");
const totGuessesArea = document.querySelector("#total");
const luckArea = document.querySelector("#luck");
const tryArea = document.querySelector("#try");
let guessCount = 0;
let fTry = 0;
let numRight = 0;
let totGuesses = 0;
let triesLeft = 4;

let randNum = Math.floor(Math.random() * 6) + 1;

document.querySelector("#rButton").addEventListener("click", () => {
  location.reload();
});

const allBoxes = document.querySelectorAll(".box");

const boxesDisabled = () => {
  document.querySelector('*').style.cursor= "progress"
  allBoxes.forEach((box) => {
    box.disabled = true;
    box.style.color = "grey";
    box.style.outlineColor = "grey";
  });
};

const gameOver = () => {
  allBoxes.forEach((box) => {
    box.disabled = true;
    box.style.color = "grey";
    box.style.outlineColor = "grey";
    box.style.cursor = "not-allowed";
  });
};

const gameWinTimeout = () => {
  setTimeout(() => {
    guessResults.innerHTML = "";
    triesLeft = 4;
    boxesDisabled(false);
    document.querySelector('*').style.cursor= "default"
    allBoxes.forEach((box) => {
      box.style.color = "white";
      box.style.outlineColor = "white";
      box.disabled = false;
      box.style.cursor = "pointer";
    });
  }, 4100);
};
