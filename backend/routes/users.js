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
  userByEmail(email).then((user) => {
    // userRecord = user.auth_users.dataValues;
    userRecord = user[0];
    console.log(`User email is ${userRecord.email}`);
    console.log(`Input email is ${email}`);
    console.log(`Input password is ${userRecord.password}`);
    console.log(`Input password is ${password}`);
    res.sendStatus(401);
  });
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
