const Sequelize = require('sequelize');
const sequelize = require('../connection');

module.exports = sequelize.define('message_properties', {
  is_read: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  is_deleted: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  deleted_at: { type: Sequelize.DATE }
});
