const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql2");
const method = require("method-override");
const { log } = require("console");
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port : ` + port);
});

app.use(express.urlencoded({ extended: true }));

app.use(method("_method"));
app.use(express.static("public/css"));
app.use(express.static("public/js"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "hawk",
  database: "delta_app",
  password: "learning",
});

let getUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// to show total users on DB home
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) AS NO_OF_USERS FROM test`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["NO_OF_USERS"];
      res.render("index.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// show all users data

app.get("/users", (req, res) => {
  let q = `SELECT * FROM test`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let users = result;
      res.render("show.ejs", { users });
    });
  } catch (err) {
    res.send("There has been some error: " + err);
  }
});

// edit the credentials of user

app.get("/edit/:id", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM test WHERE id = "${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let data = result[0];
      res.render("edit.ejs", { data });
    });
  } catch (err) {
    console.log(err);
  }
});

//update route
app.patch("/edit/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUser, email: newMail } = req.body;
  let q = `SELECT * FROM test WHERE id = "${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("Wrong Password bro");
      } else {
        let q2 = `update test set username = "${newUser}",email = "${newMail}" where id = "${id}"`;
        try {
          connection.query(q2, (err, result) => {
            if (err) throw err;
            console.log("updated");
            res.redirect("/users");
          });
        } catch (err) {
          res.send("An error occurred");
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// add user
app.get("/users/new", (req, res) => {
  res.render("new.ejs");
});

// adding data
app.post("/users/new", (req, res) => {
  let { username: username, email: email, password: password } = req.body;
  let id = faker.datatype.uuid();

  let q = `INSERT INTO test (id, username, email, password) VALUES  ("${id}","${username}","${email}","${password}")`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      setTimeout(() => {
        res.redirect("/users");
      }, 500);
    });
  } catch (err) {
    res.send("Some error occurred ", err);
  }
});

// delete user
app.delete("/users/:id", (req, res) => {
  let { id } = req.params;

  let q = `DELETE FROM test WHERE id = "${id}"`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("User deleted");
      res.redirect("/users");
    });
  } catch (err) {
    res.send("Some error occurred ", err);
  }
});
