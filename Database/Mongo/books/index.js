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

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 1,
  },
});

const Book = mongoose.model("Book", bookSchema);

let books = [
  {
    title: "XYZ",
    author: "zyx",
    price: 150,
  },
  {
    title: "ABC",
    author: "acb",
    price: 250,
  },
  {
    title: "PQR",
    author: "prq",
    price: 300,
  },
];

// Book.insertMany(books)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Book.findByIdAndUpdate(
  "66700a7919528706f89283cd",
  { $mul: { price: 1.1 } },
  { new: true }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
