let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  let task = document.querySelector("#task").value;
  document.querySelector("#task").value = "";
  let list = document.querySelector("ul");
  let newNode = document.createElement("li");
  newNode.innerText = task;
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");
  newNode.append(delBtn);
  list.append(newNode);
});

let delButtonTrigger = document.querySelector("#btn2");
delButtonTrigger.addEventListener("click", function () {
  let btnSelect = document.querySelectorAll("li button");
  btnSelect.forEach((button) => {
    button.classList.remove("delete");
  });
});

// this work is called event delegations baap ni olkhan thi kaam kravyu

let ul = document.querySelector("ul");
ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let parent = event.target.parentElement;
    parent.classList.add("delete");
  }
});

// This only works for elements which were already present in the code

// let delButtons = document.querySelectorAll(".delete");
// for (delButton of delButtons) {
//   delButton.addEventListener("click", function () {
//     let parent = delButton.parentElement;
//     parent.classList.add("delete");
//   });
// }
