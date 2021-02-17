const express = require("express");
const { update } = require("./models/auth_users");
const router = express.Router();
const Credits = require("./models/Credits");

router.get("/", (_req, res, next) =>
  Credits.findAll()
    .then((credit) => {
      console.log(credit);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
