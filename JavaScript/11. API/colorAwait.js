let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

async function demo() {
  await changeColor("green", 1000);
  await changeColor("red", 1000);
  await changeColor("blue", 1000);
}
