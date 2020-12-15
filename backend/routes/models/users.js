const { Sequelize } = require('sequelize');
const db = require('../config/database');

const users = db.define('user', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    },
    admin: {
        type: Sequelize.STRING
    }
})

module.exports = users;