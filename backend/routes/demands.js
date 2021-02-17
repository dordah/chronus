const express = require("express");
const { update } = require("./models/auth_users");
const router = express.Router();
// const db = require('./config/database');
const Demands = require("./models/Demands");

router.get("/", (_req, res, next) =>
  Demands.findAll()
    .then((demand) => {
      console.log(demand);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
