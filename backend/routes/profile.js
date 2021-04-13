require("dotenv").config();
const express = require("express");
const router = express.Router();
const Users = require("./models/auth_users");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
const Supplies = require("./models/Supplies");
const Demand = require("./models/Demands");

router.get("/info", (_req, res, next) =>
  profileInfo()
    .then((user) => {
      console.log(user);
      res.json(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

//TODO
router.post("/info/email", (req, res, next) => {
  console.log(req.body.email);
  profileInfoByEmail(req.body.email)
    .then((user) => {
      console.log(user);
      res.json(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

const profileInfo = async () => {
  //npm run dev
  const users = await Users.findAll();
  const usersRecord = users.map((user) => user.dataValues);
  const supplies = await Supplies.findAll();
  const suppliesRecord = supplies.map((supply) => supply.dataValues);
  const demands = await Demand.findAll();
  const demandsRecord = demands.map((demand) => demand.dataValues);

  const records = usersRecord.map((user) => {
    const supplyOfUser = suppliesRecord.filter(
      (supply) => supply.id == user.id
    )[0];
    const demandsOfUser = demandsRecord.filter(
      (demand) => demand.id == user.id
    )[0];
    return Object({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      birth_date: user.birth_date,
      profession: supplyOfUser.profession,
      description_card: supplyOfUser.description_card,
      description_profession: supplyOfUser.description_profession,
      demand: demandsOfUser.demand,
    });
  });

  return records;
  // 1) id (users) V
  // 2) first name (users) V
  // 3) last name (users) V
  // 5) email(users)
  // 6) phone (users)
  // 7) birth_date (users)
  // 8) profession (supllies)
  // 9) description card (supllies)
  // 10) description proffesion (supllies)
  // 11) demand (demands)
  // id	profession	description_card	description_profession	certainty	created_date	modified_date
};

const profileInfoByEmail = async (email) => {
  const userEmail = email;
  const userRecord = await Users.findAll({
    where: {
      email: userEmail,
    },
  });
  //   first_name: user.first_name,
  //   last_name: user.last_name,
  //   email: user.email,
  //   phone: user.phone,
  //   birth_date: user.birth_date,
  //   const supplyRecord = await Supplies.findAll({
  //     where: {
  //       id: userRecord.id,
  //     },
  //   });
  return userRecord;
};

module.exports = router;
