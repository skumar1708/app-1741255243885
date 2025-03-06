const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  board: {
    type: [String],
    default: Array(9).fill(null),
  },
  currentPlayer: {
    type: String,
    default: 'X',
  },
  winner: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Game', gameSchema);