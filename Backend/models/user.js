const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema(
	{
	username: { type: String, required: true },
	password: { type: String, required: true },
    signupCode: {
        type: String,
        required: true,
        validate: {
          validator: function(value) {
            return value === 'sup3rs3cr3t'
          },
          message: 'Invalid Signup Code'
        }
      },	
	}
)

const User = mongoose.model('User', userSchema)

module.exports = User