const Sequelize = require('sequelize');
const sequelize = require('../connection');

module.exports = sequelize.define('block', {
  status: Sequelize.BOOLEAN
});
