var h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }
// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("blue", 3000);

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("green", 2000, () => {
    changeColor("blue", 3000);
  });
});

//callbacks of nesting
console.log("Making color salmon");
