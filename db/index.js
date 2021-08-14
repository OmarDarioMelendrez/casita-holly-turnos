const { Sequelize } = require('sequelize');
const config = require('../config')

const sequelize = new Sequelize(`postgres://${config.DB_USER}:${config.DB_PASS}@${config.DB_HOST}:5432/${config.DB_NAME}`, {logging: false})
// const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/casitaholly')

module.exports = sequelize