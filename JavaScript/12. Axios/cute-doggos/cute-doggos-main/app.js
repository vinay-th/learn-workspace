let url = "https://dog.ceo/api/breeds/image/random";

async function dogImages() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (error) {
    return "Error occurred: " + error;
  }
}

let img = document.querySelector("#doggo");
let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
  img.src = await dogImages();
});
