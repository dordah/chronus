const { Sequelize } = require("sequelize");
const db = require("../config/database");

const chat_lists = db.define("chat_lists", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  chat_list: {
    type: Sequelize.JSONB,
  },
  created_date: {
    type: Sequelize.DATE,
  },
  modified_date: {
    type: Sequelize.DATE,
  },
});

module.exports = chat_lists;
