let gameSequence = [];
let userSequence = [];

let colors = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let hehe = new Audio("hehe.mp3");
let over = new Audio("over.mp3");

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
  userSequence = [];
  h2.innerText = `Level: ${level}`;

  //random button choose
  let ranIdx = Math.floor(4 * Math.random());
  let ranCol = colors[ranIdx];

  let ranButt = document.querySelector(`.${ranCol}`);

  btnFlash(ranButt);

  gameSequence.push(ranCol);
  console.log(gameSequence);
}

function checkAns(idx) {
  if (userSequence[idx] === gameSequence[idx]) {
    if (userSequence.length == gameSequence.length) {
      hehe.play();
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over. Your score was <b>${level}</b> Press any key to restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 400);
    over.play();
    level = 0;
    gameSequence = [];
    started = false;

    document.addEventListener("keypress", function () {
      if (started == false) {
        console.log("Game started");
        started = true;

        levelUp();
      }
    });
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = colors[btn.innerText - 1];
  userSequence.push(userColor);
  checkAns(userSequence.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
