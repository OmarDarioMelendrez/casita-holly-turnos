const { Turn } = require("../models");

// get all Turns
const TurnGetAll = async (req, res, next) => {
	try {
		const turns = await Turn.findAll();
		res.send({ msg: "Get all the Turns.", turns });
	} catch (err) {
		console.log(err);
		next(err);
	}
};
// get Turn by id
const TurnGet = async (req, res, next) => {
	try {
		const { turnId } = req.params;
		const turn = await Turn.findByPk(turnId);
		res.send({ msg: "Get Turn.", turn });
	} catch (err) {
		console.log(err);
		next(err);
	}
};
// update Turn by id
const TurnUpdate = async (req, res, next) => {
	try {
		const { turnId } = req.params;
		const turn = await Turn.update(req.body, {
			where: { id: turnId },
		});
		res.send({ msg: "Turn update.", Turn });
	} catch (err) {
		console.log(err);
		next(err);
	}
};
// delete Turn by id
const TurnDelete = async (req, res, next) => {
	try {
		const { turnId } = req.params;
		const turn = await Turn.destroy({ where: { id: turnId } });
		res.send({ msg: "Turn deleted." });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

// create Turn
const TurnCreated = async (req, res, next) => {
	try {
		const turn = await Turn.create(req.body);
		res.send({ msg: "Turn created.", turn });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

module.exports = {
	TurnGetAll,
	TurnGet,
	TurnUpdate,
	TurnDelete,
    TurnCreated
};
