const { Sequelize } = require("sequelize");
const db = require("../config/database");

const Ratings = db.define("ratings", {
  transaction_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  rate: {
    type: Sequelize.INTEGER,
  },
  text: {
    type: Sequelize.STRING,
  },
  from_id: {
    type: Sequelize.INTEGER,
  },
  on_id: {
    type: Sequelize.INTEGER,
  },
  created_date: {
    type: Sequelize.DATE,
  },
  modified_date: {
    type: Sequelize.DATE,
  },
});

module.exports = Ratings;
