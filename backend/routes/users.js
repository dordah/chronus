require("dotenv").config();
const express = require("express");
const router = express.Router();
const Users = require("./models/auth_users");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { NOW } = require("sequelize");

router.use(cookieParser());

function authenticateCookie(req, res, next) {
  let jwtToken = req.headers.cookie;
  console.log(`jwt Token before replace() is ${jwtToken}`);
  jwtToken === undefined
    ? res.sendStatus(401)
    : (jwtToken = jwtToken.replace("session_id=", ""));
  if (jwtToken == null) {
    console.log(`jwt Token after replace() is ${jwtToken}`);
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

router.get("/", authenticateCookie, (_req, res, next) =>
  allUsers()
    .then((user) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

router.post("/signup/post", (req, res, next) => {
  // check mail doesn't exist -> if it is => send 409 conflict -> if it is not => insert to auth_users + send 200
  const email = req.body.email;
  const password = req.body.password;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  allUsers()
    .then((users) => {
      const records = users.map((result) => result.email);
      console.log(records);
      const isExists = records.find((value) => value === email);
      isExists === undefined
        ? createUser(email, password, first_name, last_name).catch((err) =>
            console.log(err)
          ) && res.sendStatus(200)
        : res.sendStatus(409);
    })
    .catch((err) => res.sendStatus(404));
});

router.post("/signin/post", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  userByEmail(email)
    .then((user) => {
      // userRecord = user.auth_users.dataValues;
      userRecord = user[0];
      console.log(`User Fname ${userRecord.first_name}`);
      if (userRecord.password == password) {
        user = {
          first_name: userRecord.first_name,
          last_name: userRecord.last_name,
          email: userRecord.email,
          logged_in: true, // insert to users -> logged_in
          has_profile: userRecord.has_profile,
        };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.cookie("session_id", accessToken);
        res.json({ userRes: user });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => console.log(err) && res.sendStatus(403));
});

const userByEmail = async (email) => {
  const user = await Users.findAll({
    where: {
      email: email,
    },
  });
  return user;
};

const createUser = async (email, password, first_name, last_name) => {
  const user = await Users.create({
    email: email,
    password: password,
    first_name: first_name,
    last_name: last_name,
    created_date: Sequelize.fn("NOW"),
    modified_date: Sequelize.fn("NOW"),
  });
  console.log(`${first_name}'s auto-generated ID:`, user.id);
};

const allUsers = async () => {
  const users = await Users.findAll();
  return users;
};

module.exports = router;
