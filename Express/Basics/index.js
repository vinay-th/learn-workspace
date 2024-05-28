const express = require("express");
const app = express(); // express func returns an object it is stored in app

// console.dir(app);

let port = 8080;

app.listen(port, () => {
  console.log("Port allocated at: " + port);
});

// app.use((req, res) => {
//   console.log("request received");
//   // res.send("this is our response");
//   res.send({
//     myName: "Vinay",
//     age: 18,
//     favLang: "Javascript",
//   });
// });

app.get("/", (req, res) => {
  res.send("You are at root page");
});

app.get("/search", (req, res) => {
  res.send("You contacted search part");
});

app.get("/contact", (req, res) => {
  res.send("You contacted contact part");
});

app.get("*", (req, res) => {
  res.send("Page doesn't exist");
});

app.post("/", (req, res) => {
  res.send("You sent port req to root");
});
