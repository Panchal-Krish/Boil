const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/gamestore', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Game model
const Game = mongoose.model('Game', {
  game_name: String,
  game_image: String,
  game_description: String,
  game_storage: Number,
  game_trailer_link: String,
  game_download_link: String
});

// API endpoints
app.get('/api/games', async (req, res) => {
  try {
    const games = await Game.find({}, 'game_name game_image game_storage');
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
