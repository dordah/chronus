const { Sequelize } = require("sequelize");
const db = require("../config/database");

const Credits = db.define("credits", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  credit: {
    type: Sequelize.INTEGER,
  },
  created_date: {
    type: Sequelize.DATE,
  },
  modified_date: {
    type: Sequelize.DATE,
  },
});

module.exports = Credits;
