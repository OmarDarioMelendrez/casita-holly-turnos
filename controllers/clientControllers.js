const { Client } = require("../models");

// get all clients
const ClientGetAll = async (req, res, next) => {
	try {
		const clients = await Client.findAll();
		res.send({ msg: "Get all the clients.", clients });
	} catch (err) {
		console.log(err);
		next(err);
	}
};
// get client by id
const ClientGet = async (req, res, next) => {
	try {
		const { clientId } = req.params;
		const client = await Client.findByPk(clientId);
		res.send({ msg: "Get client.", client });
	} catch (err) {
		console.log(err);
		next(err);
	}
};
// update client by id
const ClientUpdate = async (req, res, next) => {
	try {
		const { clientId } = req.params;
		const client = await Client.update(req.body, {
			where: { id: clientId },
		});
		res.send({ msg: "Client update.", client });
	} catch (err) {
		console.log(err);
		next(err);
	}
};
// delete client by id
const ClientDelete = async (req, res, next) => {
	try {
		const { clientId } = req.params;
		const client = await Client.destroy({ where: { id: clientId } });
		res.send({ msg: "Client deleted." });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

// create client
const ClientCreated = async (req, res, next) => {
	try {
		const client = await Client.create(req.body);
		res.send({ msg: "Client created.", client });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

module.exports = {
	ClientGetAll,
	ClientGet,
	ClientUpdate,
	ClientDelete,
    ClientCreated
};
