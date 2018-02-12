const sequelize = require('../connection');
const Sequelize = require('sequelize');

module.exports = sequelize.define('participants', {
  seen: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  typing: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  unseen_count: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
  is_deleted: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  deleted_at: { type: Sequelize.DATE }
});
