require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { Pool, Client } = require("pg");
const { query } = require("express");
const router = express.Router();
const exphbs = require("express-handlebars");
// const conncetionString = "postgressql://postgres:united@localhost:5432/v1";
const path = require("path");
const exp = require("express-handlebars");
const app = express();
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");

// Database
// const db = require("./config/database");
const { nextTick } = require("process");
const { verify } = require("crypto");

// Test db connection
// db.authenticate()
//   .then(() => console.log("Database connected..."))
//   .catch((err) => console.log("Error: " + err));

app.use(bodyParser.json());
app.use(cookieParser());

// const client = new Client({
//   connectionString: conncetionString,
// });

// client.connect();

// client.query(`SELECT * from users where name = '${name}'`,(err, res)=>{
//   console.log(err,res)
// })

/* GET home page. */
<<<<<<< HEAD
app.get("/apiv1/home%0A", (req, res) => {
=======
app.get("/apiv1/home", authenticateCookie, (req, res) => {
>>>>>>> 926597fe9a611558be28f67c77ae1c70c092162d
  res.render("index", { title: "Express" });
  res.sendStatus(200);
});

const posts = [
  {
    id: 0,
    username: "Boaz",
    password: "arsenalSucks",
  },
  {
    id: 1,
    username: "Dor",
    password: "123",
  },
  {
    id: 2,
    username: "Zeev",
    password: "SmolHazak",
  },
];

app.get("/posts%0A", authenticateToken, (req, res) => {
  username = posts.filter((post) => post.username === req.user.name);
  res.json({ username });
});

app.get("/cookie", (req, res) => {
  console.log(req.headers);
  const jwtToken = req.headers.cookie.replace("session_id=", "");
  const jwtVerify = jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET);
  res.send(jwtVerify);
  res.sendStatus(200);
});

function authenticateCookie(req, res, next) {
  const jwtToken = req.headers.cookie;
  jwtToken === undefined ? res.sendStatus(401) : replace("session_id=", "");
  if (jwtToken == null) return res.sendStatus(401);

  jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post("/login", (req, res) => {
  // Authenticat User
  const username = req.body.username;
  console.log(username);
  const password = req.body.password;
  // Send back to client json with all data (Front) - (DB) - Check if user exist && Password ? Return user's details : Deny (401)
  // TODO - Set cookie for client -> { accessToken(Data) }
  let user;
  let userId;
  let indexId;
  posts.some((a) => a.username === username)
    ? (indexId = posts.map((i) => i.username).indexOf(username))
    : (indexId = null);
  console.log(indexId);
  userId = posts[indexId].id;
  // console.log(userId);
  if (posts[indexId].password === password) {
    user = { name: username, id: userId };
  } else {
    user = null;
  }
  if (user != null) {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    // set cookie({ accessToken: accessToken })
    res.cookie("session_id", accessToken);
    res.json({ userRes: user });
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post("/apiv1/user/register%0A", (req, res) => {
  console.log(req.body);
  res.render("index", { title: "Hello, GET request at apiv1/user/register" });
  res.render("index", { title: req.body });
});

app.get("/logout", (req, res) => {
  res.clearCookie("session_id");
  res.send("Cookie Cleared");
  res.sendStatus(200);
});

// User routes
app.use("/apiv1/user%0A", require("./user"));

// Main route
app.use("/apiv1", router);

module.exports = app;
