const { Sequelize } = require("sequelize");
const db = require("../config/database");

const auth_users = db.define("auth_users", {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  birth_date: {
    type: Sequelize.DATEONLY,
  },
  phone: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  logged_in: {
    type: Sequelize.BOOLEAN,
  },
  is_admin: {
    type: Sequelize.BOOLEAN,
  },
  has_profile: {
    type: Sequelize.BOOLEAN,
  },
  created_date: {
    type: Sequelize.DATE,
  },
  modified_date: {
    type: Sequelize.DATE,
  },
  is_active: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = auth_users;
