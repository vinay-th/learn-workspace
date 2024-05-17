let myDiv = document.querySelector("#myDiv");
let btn = document.querySelector("button");
let heading = document.querySelector("#heading");
btn.onclick = function () {
  let x = Math.floor(255 * Math.random());
  let y = Math.floor(255 * Math.random());
  let z = Math.floor(255 * Math.random());

  myDiv.style.backgroundColor = `rgb(${x},${y},${z})`;

  heading.innerText = `rgb(${x},${y},${z})`;
};
