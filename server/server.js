const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', leadRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
