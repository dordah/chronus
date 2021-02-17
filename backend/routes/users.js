const express = require("express");
const router = express.Router();
const Users = require("./models/auth_users");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", (_req, res, next) =>
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
  wrongPassword(email, password).then((user) => {
    console.log(`password is ${user.password}`);
  });
  userByNameAndPassword(email, password).then((user) => {
    console.log(user);
    if (user.length == 0) {
      // res.json({ userRes: user });
      res.sendStatus(200);
    } else {
      res.sendStatus(409);
    }
  });
});

const allUsers = async () => {
  const users = await Users.findAll();
  return users;
};

const userByNameAndPassword = async (email, password) => {
  const user = await Users.findAll({
    where: {
      email: email,
      password: password,
    },
  });
  return user;
};

const wrongPassword = async (email, password) => {
  const user = await Users.findAll({
    where: {
      email: email,
      [Op.not]: [password],
    },
  });
  return user;
};

module.exports = router;
