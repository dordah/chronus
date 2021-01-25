const { Sequelize } = require("sequelize");
const db = require("../config/database");

const users = db.define("user", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  user: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

module.exports = users;
