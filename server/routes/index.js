const router = require('express').Router()

const restaurantsRouter = require('./restaurants.routes')
const authRouter = require('./auth.routes')

router.use('/restaurants', restaurantsRouter)
router.use('/auth', authRouter)

module.exports = router

