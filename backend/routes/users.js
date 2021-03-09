require("dotenv").config();
const express = require("express");
const router = express.Router();
const Users = require("./models/auth_users");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

router.use(bodyParser.json());
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

router.post("/signin/post", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  userByEmail(email)
    .then((user) => {
      // userRecord = user.auth_users.dataValues;
      userRecord = user[0];
      console.log(user);
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
    .catch((err) => res.sendStatus(403));
});

// userByNameAndPassword(email, password).then((user) => {
//   console.log(user);
//   if (user.length == 0) {
//     // res.json({ userRes: user });
//     res.sendStatus(200);
//   } else {
//     res.sendStatus(409);
//   }
// });

const allUsers = async () => {
  const users = await Users.findAll();
  return users;
};

const userByEmail = async (email) => {
  const user = await Users.findAll({
    where: {
      email: email,
    },
  });
  return user;
};

const wrongPassword = async (email, password) => {
  const user = await Users.findAll({
    where: {
      email: email,
      [Op.not]: { password: [password] },
    },
  });
  return user;
};

module.exports = router;
