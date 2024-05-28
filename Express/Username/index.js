const express = require("express");
const app = express();

let port = 8080;

app.listen(port, (req, res) => {
  console.log("Port allocated");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let head = `<h1>Welcome to page of @${username}</h1>`;
  res.send(head);
});

app.get("/", (req, res) => {
  res.send("Hello this is root page");
});

// app.get("/search", (req, res) => {
//   let searchBox = `<input type="text" id="srch" placeholder="Enter name">`;
//   res.send(searchBox);
// });

app.get("/search", (req, res) => {
  let query = req.query;
  if (!query.q) {
    res.send(`Enter something`);
  }
  res.send(`Search results: ${query.q}`);
});
