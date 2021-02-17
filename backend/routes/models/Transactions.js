const { Sequelize } = require("sequelize");
const db = require("../config/database");

const Transactions = db.define("transactions", {
  from_id: {
    type: Sequelize.INTEGER,
  },
  to_id: {
    type: Sequelize.INTEGER,
  },
  amount: {
    type: Sequelize.INTEGER,
  },
  created_date: {
    type: Sequelize.DATE,
  },
  modified_date: {
    type: Sequelize.DATE,
  },
});

module.exports = Transactions;
