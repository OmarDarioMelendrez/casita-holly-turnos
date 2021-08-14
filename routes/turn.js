const router = require('express').Router()
const {TurnGetAll,TurnGet,TurnUpdate, TurnDelete, TurnCreated} = require("../controllers/turnControllers")

// get all Turns
router.get("/", TurnGetAll)
// get Turn by id
router.get("/:turnId", TurnGet)
// update Turn by id
router.put("/:turnId", TurnUpdate)
// dele Turn by id
router.delete("/:turnId", TurnDelete)
// create Turn
router.post("/", TurnCreated)

module.exports = router