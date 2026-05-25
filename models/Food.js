const mongoose = require('mongoose');

// Ye batata hai ke database mein data kis shakal mein save hoga
const FoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    image: { type: String } // Hum yahan image ka URL rakhen ge
});

module.exports = mongoose.model('Food', FoodSchema);