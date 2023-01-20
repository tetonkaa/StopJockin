// Dependencies 
const express = require('express')
const router = express.Router()
const db = require("../models")
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const User = require('../models/user')




//routes

//create post route for signup to include error handling if signup code is incorrect










router.post('/signup', async (req, res) =>{ 
    const foundUser = await db.User.findOne({ username: req.body.username})
    console.log(foundUser)
    if(!foundUser){
        const createdUser = await db.User.create(req.body)
        const payload = {id: createdUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        const { signupCode } = req.body;

  }})

router.post('/login', async (req, res) => {
    const foundUser = await User.findOne({ username: req.body.username })
    if (foundUser && foundUser.password === req.body.password) {
        const payload = {id: foundUser.id}
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            token: token,
            user: foundUser
        })
    } else {
      res.sendStatus(401)
    }
})

//show product admin page
router.get('/products/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
})

router.get('/', async (req, res) => {
  const token = req.headers.authorization
  const decode = jwt.decode(token, config.jwtSecret)
  const foundUser = await db.User.findById(decode.id)
  res.json(foundUser)
})

router.delete('/', async (req, res) => {
  const token = req.headers.authorization
  const decode = jwt.decode(token, config.jwtSecret)
  const foundUser = await db.User.findByIdAndDelete(decode.id)
  res.json(foundUser)
})









module.exports = router