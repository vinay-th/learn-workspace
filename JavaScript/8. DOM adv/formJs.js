addEventListener("submit", function () {
  this.event.preventDefault();
  let username = document.querySelector("#usr").value;
  let pass = document.querySelector("#pass").value;
  console.log("Your user name is : " + username);
  console.log("Your pass is : " + pass);
});
