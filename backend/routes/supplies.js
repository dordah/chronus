const express = require("express");
const { update } = require("./models/auth_users");
const router = express.Router();
const Supplies = require("./models/Supplies");

router.get("/", (_req, res, next) =>
  Supplies.findAll()
    .then((supply) => {
      console.log(supply);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
