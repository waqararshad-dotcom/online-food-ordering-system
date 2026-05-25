const foodRoutes = require('./routes/foodRoutes');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/foods', foodRoutes);

// MongoDB Connection String
// 'foodDB' aapke database ka naam hoga jo Compass mein nazar aaye ga
const mongoURI = "mongodb://127.0.0.1:27017/foodDB";

mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB Connected... ✅"))
    .catch(err => console.log("Database Connection Error: ❌", err));

// Ek simple route check karne ke liye
app.get('/', (req, res) => {
    res.send("Server is Running!");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});