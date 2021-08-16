const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db");

class Turn extends Model {}

Turn.init(
	{
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		hour: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		pet: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		state: {
			type: DataTypes.ENUM("pedido", "cancelado", "realizado"),
			allowNull: false,
      defaultValue: "pedido"
		},
	},
	{
		sequelize: db,
		modelName: "turns",
	}
);

// User.beforeCreate((user, options) => {

//     return bcrypt.hash(user.password, saltRounds)
//         .then(hash => {
//             user.password = hash;
//         })
//         .catch(err => {
//             throw new Error();
//         });
// });

module.exports = Turn;
