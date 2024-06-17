const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ChitChatCity");
}

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Some error occurred ", err);
  });

Chat.insertMany([
  {
    from: "niomi",
    to: "vinay",
    content: "i wuvv you too",
    created_at: new Date(),
  },
  {
    from: "vinay",
    to: "niomi",
    content: "babygirl :>",
    created_at: new Date(),
  },
  {
    from: "niomi",
    to: "vinay",
    content: "i love you",
    created_at: new Date(),
  },
  {
    from: "vinay",
    to: "niomi",
    content: "i love you more",
    created_at: new Date(),
  },
  {
    from: "niomi",
    to: "vinay",
    content: "i love you most",
    created_at: new Date(),
  },
  {
    from: "vinay",
    to: "niomi",
    content: "i love you forever",
    created_at: new Date(),
  },
]);
