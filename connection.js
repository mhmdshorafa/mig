const Sequelize = require('sequelize');
const newDatabaseConfig = process.env.NEW;

module.exports = new Sequelize(newDatabaseConfig, { dialect: 'postgres' ,pool: {
max: 100,
min: 0,
idle: 120000,
acquire: 120000
}});
