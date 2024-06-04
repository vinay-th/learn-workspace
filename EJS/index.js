const { log } = require("console");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  let dice = Math.floor(Math.random() * 6) + 1;
  //   res.render("rolldice.ejs", { num: dice });
  res.render("rolldice.ejs", { dice });
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  res.render("instagram.ejs", { username });
});
