const { Sequelize } = require("sequelize");
const db = require("../config/database");

const Demands = db.define("demands", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  demand: {
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

module.exports = Demands;
