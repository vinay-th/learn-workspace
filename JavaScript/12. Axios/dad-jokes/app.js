const url = "https://icanhazdadjoke.com/";

async function getJoke() {
  try {
    const config = { headers: { Accept: "Application/JSON" } };
    let res = await axios.get(url, config);
    return res.data.joke;
  } catch (error) {
    console.log("Error: " + error);
  }
}

let p = document.querySelector("#txt");
let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
  p.innerText = await getJoke();
});
