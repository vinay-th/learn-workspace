const mongoose = require("mongoose");

const ChitChatCitySchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    maxLength: 100,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const Chat = mongoose.model("chat", ChitChatCitySchema);

module.exports = Chat;
