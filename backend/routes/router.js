const router = require("express").Router()

// services routes

const servicesRouter = require("./Services")

router.use("/", servicesRouter)

// Parties routes

const partyRouter = require("./parties")

router.use("/", partyRouter)




module.exports = router