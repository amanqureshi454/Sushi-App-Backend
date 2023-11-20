const mongoose = require('mongoose');

const SushiModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Fill the Name Field'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please Fill the Email Field'],
  },
  message: {
    type: String,
    required: [true, 'Please Fill the Email Field'],
  },
});

const Users = mongoose.model('users', SushiModel);

module.exports = Users; // Corrected export statement