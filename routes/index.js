const router = require('express').Router()
const clientsRouter = require('./client')
const petRouter = require('./pet')
const turnRouter = require('./turn')

router.use("/client", clientsRouter)
router.use("/pet", petRouter)
router.use("/turn", turnRouter)

module.exports = router