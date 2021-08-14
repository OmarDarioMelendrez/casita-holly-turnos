const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');


class Client extends Model {}

Client.init({
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'clients'
});

module.exports = Client;