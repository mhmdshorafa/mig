const Sequelize = require('sequelize');
const sequelize = require('../connection');

module.exports = sequelize.define('messages', {
  message: Sequelize.STRING
});
