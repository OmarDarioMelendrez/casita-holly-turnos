const { Pet } = require("../models");

// get all Pets
const PetGetAll = async (req, res, next) => {
	try {
		const pets = await Pet.findAll();
		res.send({ msg: "Get all the Pets.", pets });
	} catch (err) {
		console.log(err);
		next(err);
	}
};
// get Pet by id
const PetGet = async (req, res, next) => {
	try {
		const { petId } = req.params;
		const pet = await Pet.findByPk(petId);
		res.send({ msg: "Get Pet.", pet });
	} catch (err) {
		console.log(err);
		next(err);
	}
};
// update Pet by id
const PetUpdate = async (req, res, next) => {
	try {
		const { petId } = req.params;
		const pet = await Pet.update(req.body, {
			where: { id: petId },
		});
		res.send({ msg: "Pet update.", pet });
	} catch (err) {
		console.log(err);
		next(err);
	}
};
// delete Pet by id
const PetDelete = async (req, res, next) => {
	try {
		const { petId } = req.params;
		const pet = await Pet.destroy({ where: { id: petId } });
		res.send({ msg: "Pet deleted." });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

// create Pet
const PetCreated = async (req, res, next) => {
	try {
		const pet = await Pet.create(req.body);
		res.send({ msg: "Pet created.", pet });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

module.exports = {
	PetGetAll,
	PetGet,
	PetUpdate,
	PetDelete,
    PetCreated
};
