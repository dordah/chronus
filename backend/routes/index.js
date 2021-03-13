require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");

// Database
const db = require("./config/database");

// Test db connection
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.use(bodyParser.json());
app.use(cookieParser());

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

/* GET home page. */

app.get("/apiv1/home", authenticateCookie, (req, res) => {
  res.render("index", { title: "Express" });
  res.sendStatus(200);
});

const posts = [
  {
    id: 0,
    username: "Boaz",
    password: "123",
    email: "Arsenal@.gmail.com",
    isLoggenin: false,
    viewer: 2,
  },
  {
    id: 1,
    username: "Dor",
    password: "12345",
    email: "FuckManU@.gmail.com",
    isLoggenin: false,
    viewer: 1,
  },
  {
    id: 2,
    username: "Zeev",
    password: "SmolHazak",
    email: "LoveBeizim@.gmail.com",
    isLoggenin: false,
    viewer: 2,
  },
];

// For Front
app.get("/posts", authenticateToken, (req, res) => {
  username = posts.filter((post) => post.username === req.user.name);
  res.json({ username });
});

app.get("/cookie", (req, res) => {
  console.log(req.headers);
  // Dor - need to add here a way to handle if there is no cookie on the header.
  // This happend afer you clear the cookie and i am sending you a route to cookie.
  const jwtToken = req.headers.cookie.replace("session_id=", "");
  const jwtVerify = jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET);
  res.send(jwtVerify);
});

function authenticateCookie(req, res, next) {
  let jwtToken = req.headers.cookie;
  console.log(`jwt Token before replace() is ${jwtToken}`);
  jwtToken === undefined
    ? res.sendStatus(401)
    : (jwtToken = jwtToken.replace("session_id=", ""));
  console.log(`jwt Token after replace() is ${jwtToken}`);
  if (jwtToken == null) {
    return res.sendStatus(401);
  }

  jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

app.post("/signin", (req, res) => {
  // Authenticat User
  const username = req.body.username;
  console.log(username);
  const password = req.body.password;
  let user;
  let indexId;
  // Remove this && connect to users
  // Q - email (unique) && password
  posts.some((a) => a.username === username)
    ? (indexId = posts.map((i) => i.username).indexOf(username))
    : (indexId = null);
  console.log(indexId);

  if (posts[indexId].password === password) {
    user = {
      name: posts[indexId].username, // `${first_name} ${last_name}`
      id: posts[indexId].id,
      email: posts[indexId].email,
      logged_in: true, // insert to users -> logged_in
      viewer: posts[indexId].viewer,
    };
  } else {
    user = null;
  }
  if (user != null) {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.cookie("session_id", accessToken);
    res.json({ userRes: user });
    // res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.post("/apiv1/user/register", (req, res) => {
  console.log(req.body);
  res.render("index", { title: "Hello, GET request at apiv1/user/register" });
  res.render("index", { title: req.body });
});

app.get("/logout", (req, res) => {
  res.clearCookie("session_id");
  res.send("Cookie Cleared");
  res.sendStatus(200);
});

module.exports = app;
