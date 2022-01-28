const router = require('express').Router()
const Restaurant = require('../models/restaurant.model')

router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find().lean()
        res.status(200).json({ restaurants, message: "Restaurants retrieved" })
    } catch (err) {
        res.status(500).json({ code: 500, message: 'Error retrieving restaurants', err })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const restaurant = await Restaurant.findById(id).lean()
        res.status(200).json({ restaurant, message: "Restaurant retrieved" })
    } catch (err) {
        res.status(500).json({ code: 500, message: 'Error retrieving single restaurant', err })
    }
})

router.post('/', async (req, res) => {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json({ restaurant, message: 'Restaurant created' });
    } catch (err) {
        res.status(400).json({ code: 400, message: 'Error creating restaurant', err });
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ restaurant, message: 'Restaurant edited' });
    } catch (err) {
        res.status(500).json({ code: 500, message: 'Error editing', err });
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findByIdAndDelete(id)
        res.status(200).json({ message: `Restaurant ${id} deleted` })

    } catch (error) {
        return res.status(500).json({ code: 500, message: 'Error deleting restaurant', err });
    }
})

module.exports = router