const express = require("express");
const { update } = require("./models/auth_users");
const router = express.Router();
// const db = require('./config/database');
const Transactions = require("./models/Transactions");

router.get("/", (_req, res, next) =>
  Transactions.findAll()
    .then((transaction) => {
      console.log(transaction);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
