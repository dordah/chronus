const express = require("express");
const bodyParser = require("body-parser");
const { Pool, Client } = require("pg");
const { query } = require("express");
const router = express.Router();
const exphbs = require("express-handlebars");
const conncetionString = "postgressql://postgres:united@localhost:5432/v1";
const path = require("path");
const exp = require("express-handlebars");

const app = express();

// Database
const db = require("./config/database");

// Test db connection
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.use(bodyParser.json());

router.use(bodyParser.json());

const client = new Client({
  connectionString: conncetionString,
});

client.connect();

const name = "Dor";

// client.query(`SELECT * from users where name = '${name}'`,(err, res)=>{
//   console.log(err,res)
// })

/* GET home page. */
app.get("/apiv1/home", (req, res) => {
  res.render("index", { title: "Express" });
  res.sendStatus(200);
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

const posts = [
  {
    username: "Boaz",
    title: "Post 1",
  },
  {
    username: "Dor",
    title: "Post 2",
  },
];

app.post("/apiv1/user/register", (req, res) => {
  console.log(req.body);
  res.render("index", { title: "Hello, GET request at apiv1/user/register" });
  res.render("index", { title: req.body });
});

// User routes
app.use("/apiv1/user", require("./user"));

// Main route
app.use("/apiv1", router);

module.exports = app;
