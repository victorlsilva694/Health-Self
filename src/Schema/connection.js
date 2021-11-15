const Sequelize = require('sequelize');

const Connection = new Sequelize('healthself', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = Connection;