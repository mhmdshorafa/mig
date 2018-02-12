const Sequelize = require('sequelize');
const sequelize = require('../connection');

module.exports = sequelize.define('rooms', {
  subject: { type: Sequelize.STRING, allowNull: true },
  isspam: { type: Sequelize.BOOLEAN, allowNull: true },
  last_message: { type: Sequelize.STRING, allowNull: true },
  last_message_date: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
});
