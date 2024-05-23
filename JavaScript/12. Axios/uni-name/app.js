const url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

async function getName() {
  let srch = document.querySelector("#srch").value;
  let res = await axios.get(url + srch);
  return res.data;
}

btn.addEventListener("click", async () => {
  list.innerHTML = "";
  colArray = await getName();
  printList(colArray);
});

function printList(colArray) {
  for (col of colArray) {
    createNode(col.name);
  }
}
function appendList(ele) {
  list.appendChild(ele);
}
function createNode(data) {
  let node = document.createElement("li");
  node.innerText = data;
  appendList(node);
}
