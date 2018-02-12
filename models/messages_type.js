const Sequelize = require('sequelize');
const sequelize = require('../connection');

module.exports = sequelize.define('messages_types', {
  type: Sequelize.STRING
});
