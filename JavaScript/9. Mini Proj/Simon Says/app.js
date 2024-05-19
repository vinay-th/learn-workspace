let gameSequence = [];
let userSequence = [];

let colors = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;

    levelUp();
  }
});

function btnFlash(btn) {
  // class flash added
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  // class flash added
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  // level up and printing on screen
  level++;
  h2.innerText = `Level: ${level}`;

  //random button choose
  let ranIdx = Math.floor(4 * Math.random());
  let ranCol = colors[ranIdx];

  let ranButt = document.querySelector(`.${ranCol}`);

  btnFlash(ranButt);

  gameSequence.push(ranCol);
  console.log(gameSequence);
}

function checkAns() {
  let idx = level - 1;
  if (userSequence[idx] === gameSequence[idx]) {
    console.log("Same value");
  } else h2.innerText = "Game over. Press any key to restart";
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = colors[btn.innerText - 1];
  userSequence.push(userColor);
  checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
