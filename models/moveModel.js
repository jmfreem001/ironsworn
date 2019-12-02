const mongoose = require('mongoose');

const moveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'a move must have a name'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'a move must have a description']
  },
  type: {
    type: String,
    required: [true, 'a move must have a type']
  },
  category: {
    type: String,
    required: [true, 'a move must have a category']
  },

  dependent: {
    type: Boolean,
    default: false
  }
});

const Move = mongoose.model('Move', moveSchema);

module.exports = Move;
