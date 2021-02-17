const express = require("express");
const { update } = require("./models/auth_users");
const router = express.Router();
// const db = require('./config/database');
const Ratings = require("./models/Ratings");

router.get("/", (_req, res, next) =>
  Ratings.findAll()
    .then((rating) => {
      console.log(rating);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
