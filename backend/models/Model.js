const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  folder: { type: String, required: true }, // example: 'industrial_robot'
  description: { type: String },
  thumbnail: { type: String },
});

module.exports = mongoose.model('Model', modelSchema);
