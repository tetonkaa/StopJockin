const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')
const Product = require('../models/product')

function isAuthenticated(req, res, next) {
    if (req.headers.authorization) {
        next()
    } else {
        res.sendStatus(401)
    }
}

router.post('/', isAuthenticated, async (req, res) => {
    const createdProduct = await Product.create(req.body)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    createdProduct.user = decoded.id
    createdProduct.save()
    res.json(createdProduct)
})

// index route
router.get('/', async (req, res) => {
    const token = req.headers.authorization
    const decode = jwt.decode(token, config.jwtSecret)
    const foundUser = await db.User.findById(decode.id)
    const allProducts = await Product.find({ user: foundUser })
    res.json(allProducts)
})

module.exports = router