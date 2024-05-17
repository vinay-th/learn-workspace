let btn = document.querySelector("button");
// btn.onclick = function () {
//   console.log("Button was clicked !");
// };
btn.addEventListener("click", function () {
  console.log("Button was clicked");
});
btn.addEventListener("dblclick", function () {
  console.log("Button was double clicked");
});
