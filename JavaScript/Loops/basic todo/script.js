let todo = [];
function startList() {
  let opt = prompt("Please enter your request: ");

  if (opt == "Add") {
    while (true) {
      let add = prompt("Please enter your task: ");
      if (add != "Quit") {
        todo.push(add);
        // alert(todo);
      } else {
        break;
      }
    }
  }
  if (opt == "Delete") {
    let del = prompt("Please enter task to delete: ");
    todo.pop(del);
    alert(todo);
  }
  if (opt == "List") {
    let res = document.getElementById("res");
    res.innerHTML = "";
    for (let i = 0; i < todo.length; i++) {
      res.innerHTML += `${i + 1}) ${todo[i]}<br>`;
    }
  }
}
