const express = require("express");
const { update } = require("./models/users");
const router = express.Router();
// const db = require('./config/database');
const Users = require("./models/users");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", (_req, res, next) =>
  Users.findAll()
    .then((user) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
