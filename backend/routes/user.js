const express = require("express");
const { update } = require("./models/users");
const router = express.Router();
// const db = require('./config/database');
const Users = require("./models/users");

// Get users list
router.get("/", (_req, res) =>
  Users.findAll()
    .then((user) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

// Add a user
router.get("/add", (req, res) => {
  const data = {
    id: "4",
    name: "New User",
    email: "new@email.com",
    phone: 1521254,
    city: "Tel Avivo",
    admin: false,
  };

  let { id, name, email, phone, city, admin } = data;

  // Insert into table
  Users.create({
    id,
    name,
    email,
    phone,
    city,
    admin,
  })
    .then((user) => res.redirect("/user"))
    .catch((err) => console.log(err));
});

module.exports = router;
