const router = require('express').Router()
const User = require('../models/user.model')

router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (user) throw createError(409, 'User already registered');
        else user = await User.create(req.body)
        res.status(201).json({ user, message: "User registered" })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router