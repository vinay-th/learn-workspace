const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/delta");
}

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Some error occurred ", err);
  });

let userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// let user2 = new User({
//   username: "Eve",
//   email: "eve@yahoo.in",
//   age: 21,
// });
// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let manyUsers = [
//   {
//     username: "bob",
//     email: "bob69@gmail.com",
//     age: 26,
//   },
//   {
//     username: "marry",
//     email: "marry@gmail.com",
//     age: 20,
//   },
//   {
//     username: "carrie",
//     email: "carrie99@gmail.com",
//     age: 22,
//   },
//   {
//     username: "chico",
//     email: "chico@gmail.com",
//     age: 24,
//   },
// ];

// User.insertMany(manyUsers)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateOne({ username: "bob" }, { age: 29 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ username: "bob" }, { age: 34 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.findByIdAndUpdate("666ffd6af3fc0f3bfc076705", { age: 31 }, { new: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
