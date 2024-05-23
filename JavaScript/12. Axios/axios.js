let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    let fact = res.data.fact;
    return fact;
  } catch (e) {
    return "Error: " + e;
  }
}
let p = document.querySelector("#fct");
let btn = document.querySelector("#btn");
btn.addEventListener("click", async () => {
  let fact = await getFacts();
  p.innerText = fact;
});
