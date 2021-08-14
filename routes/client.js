const router = require('express').Router()
const {ClientGetAll,ClientGet,ClientUpdate, ClientDelete, ClientCreated} = require("../controllers/clientControllers")

// get all clients
router.get("/", ClientGetAll)
// get client by id
router.get("/:clientId", ClientGet)
// update client by id
router.put("/:clientId", ClientUpdate)
// dele client by id
router.delete("/:clientId", ClientDelete)
// create client
router.post("/", ClientCreated)

module.exports = router