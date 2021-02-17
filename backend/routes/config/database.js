const { Sequelize } = require("sequelize");

module.exports = new Sequelize("v1", "postgres", "united", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,
  define: {
    timestamps: false,
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: 0
});
