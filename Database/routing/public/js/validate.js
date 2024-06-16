function validate() {
  let pass = document.querySelector("#pass").value;
  let conPass = document.querySelector("#con-pass").value;

  if (conPass !== pass) {
    alert("You entered wrong password");
    return false;
  }
}
