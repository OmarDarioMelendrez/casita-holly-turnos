const router = require('express').Router()
const {PetGetAll,PetGet,PetUpdate, PetDelete, PetCreated} = require("../controllers/petControllers")

// get all Pets
router.get("/", PetGetAll)
// get Pet by id
router.get("/:petId", PetGet)
// update Pet by id
router.put("/:petId", PetUpdate)
// dele Pet by id
router.delete("/:petId", PetDelete)
// create Pet
router.post("/", PetCreated)

module.exports = router