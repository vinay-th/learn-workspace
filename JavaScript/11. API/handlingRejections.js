let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 6);
      if (num < 3) {
        h1.style.color = color;
        resolve("color changed!");
      } else reject("error caught");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("green", 1000);
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    console.log("Error caught");
    console.log(err);
  }
}
