var h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    changeColor("green", 2000);
  })
  .then(() => {
    changeColor("blue", 3000);
  })
  .catch(() => {
    console.log("Can't fill color");
  });

//callbacks of nesting
console.log("Making color change");
