const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// 1. POST request: Database mein food item add karne ke liye
router.post('/add', async (req, res) => {
    try {
        const newFood = new Food(req.body);
        const savedFood = await newFood.save();
        res.status(200).json(savedFood);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 2. GET request: Saari food items dekhne ke liye
router.get('/all', async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 3. DELETE request: Item ko delete karne ke liye
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedFood = await Food.findByIdAndDelete(req.params.id);
        if (!deletedFood) {
            return res.status(404).json({ message: "Item nahi mila" });
        }
        res.status(200).json({ message: "Item kamyabi se delete ho gaya!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// 4. PUT request: Item ki spelling ya detail sahi (Update) karne ke liye
router.put('/update/:id', async (req, res) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedFood);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;