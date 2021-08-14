const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');


class Pet extends Model {}

Pet.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
      type: DataTypes.ENUM("chico","mediano","grande"),
      allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'pets'
});

module.exports = Pet;