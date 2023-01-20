const mongoose = require("mongoose");
const Schema = mongoose.Schema
require("dotenv").config()

const userSchema = new mongoose.Schema(
	{
	username: { type: String, required: true },
	password: { type: String, required: true },
    signupCode: {
        type: String,
        required: true,
        validate: {
          validator: function(value) {
            return value === `${process.env.USERKEY}`
          },
          message: 'Invalid Signup Code'
        }
      },	
	}
)

const User = mongoose.model('User', userSchema)

module.exports = User










