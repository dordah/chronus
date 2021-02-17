const { Sequelize } = require("sequelize");
const db = require("../config/database");

const Supplies = db.define("supplies", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  profession: {
    type: Sequelize.STRING,
  },
  description_card: {
    type: Sequelize.STRING,
  },
  description_profession: {
    type: Sequelize.STRING,
  },
  certainty: {
    type: Sequelize.INTEGER,
  },
  created_date: {
    type: Sequelize.DATE,
  },
  modified_date: {
    type: Sequelize.DATE,
  },
});

module.exports = Supplies;
