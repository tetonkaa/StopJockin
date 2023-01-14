const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String},
        image: {type: String, required: true},
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)
const Product = mongoose.model("Product", productSchema)

module.exports = Product