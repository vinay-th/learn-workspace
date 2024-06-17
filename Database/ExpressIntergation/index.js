const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

app.listen(port, () => {
  console.log(`Server is running on port : ` + port);
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ChitChatCity");
}

main()
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log("Some error occurred ", err);
  });

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public/css"));
app.use(express.static("public/js"));

// index chat route
app.get("/chats", async (req, res) => {
  let data = await Chat.find();
  res.render("index.ejs", { data });
});

// new chat
app.post("/new", (req, res) => {
  let from = "Vinay";
  let { to, content } = req.body;
  let data = new Chat({
    from: from,
    to: to,
    content: content,
    created_at: new Date(),
  });
  data
    .save()
    .then((result) => {
      res.redirect("/chats#bottom");
    })
    .catch((err) => {
      console.log(err);
    });
});
