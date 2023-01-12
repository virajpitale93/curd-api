const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    details: String,

});

module.exports = mongoose.model("products", productSchema);